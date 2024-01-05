import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import img1 from "../animations/PromoPage__animation/Vector 18 (1).png";
// import img2 from "../animations/PromoPage__animation/Vector 18 (2).png";
// import img3 from "../animations/PromoPage__animation/Vector 18 (3).png";
// import img4 from "../animations/PromoPage__animation/Vector 18 (4).png";
// import img5 from "../animations/PromoPage__animation/Vector 18 (5).png";


const Promo__animation = () => {
  const mountRef = useRef(null);
  const frameCount = 10; // Количество кадров в вашей анимации
  const textures = []; // Массив для хранения текстур

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Загрузка текстур
    const loader = new THREE.TextureLoader();
    for (let i = 1; i <= frameCount; i++) {
      loader.load(`./PromoPage__animation/Vector 18 (${i}).png`, (texture) => {
        textures.push(texture);
        if (textures.length === frameCount) {
          // Все текстуры загружены, начинаем анимацию
          startAnimation();
        }
      });
    }

    // Создание плоскости для анимации
    const geometry = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({ map: textures[0], transparent: true });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    camera.position.z = 10;

    // Функция для старта анимации
    let currentFrame = 0;
    const startAnimation = () => {
      const animate = () => {
        requestAnimationFrame(animate);
        currentFrame = (currentFrame + 1) % frameCount; // Циклически перебираем кадры
        plane.material.map = textures[currentFrame]; // Обновление текстуры
        renderer.render(scene, camera);
      };
      animate();
    };

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Promo__animation;

