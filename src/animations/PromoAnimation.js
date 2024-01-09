import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import * as THREE from 'three';
import img1 from '../animations/PromoPage__animation/Vector 18 (1).png';
import img2 from '../animations/PromoPage__animation/Vector 18 (2).png';
import img3 from '../animations/PromoPage__animation/Vector 18 (3).png';
import img4 from '../animations/PromoPage__animation/Vector 18 (4).png';
import img5 from '../animations/PromoPage__animation/Vector 18 (5).png';
import img6 from '../animations/PromoPage__animation/Vector 18 (6).png';
import img7 from '../animations/PromoPage__animation/Vector 18 (7).png';
import img8 from '../animations/PromoPage__animation/Vector 18 (8).png';
import img9 from '../animations/PromoPage__animation/Vector 18 (9).png';
import img10 from '../animations/PromoPage__animation/Vector 18 (10).png';
import img11 from '../animations/PromoPage__animation/Vector 18 (11).png';
import img12 from '../animations/PromoPage__animation/Vector 18 (12).png';
import img13 from '../animations/PromoPage__animation/Vector 18 (13).png';
import img14 from '../animations/PromoPage__animation/Vector 18 (14).png';
import img15 from '../animations/PromoPage__animation/Vector 18 (15).png';
import img16 from '../animations/PromoPage__animation/Vector 18 (16).png';
import img17 from '../animations/PromoPage__animation/Vector 18 (17).png';
import img18 from '../animations/PromoPage__animation/Vector 18 (18).png';
import img19 from '../animations/PromoPage__animation/Vector 18 (19).png';
import img20 from '../animations/PromoPage__animation/Vector 18 (20).png';
import img21 from '../animations/PromoPage__animation/Vector 18 (21).png';
import img22 from '../animations/PromoPage__animation/Vector 18 (22).png';
import img23 from '../animations/PromoPage__animation/Vector 18 (23).png';
import img24 from '../animations/PromoPage__animation/Vector 18 (24).png';
import img25 from '../animations/PromoPage__animation/Vector 18.png';

const PromoAnimation = () => {
    const mountRef = useRef(null);
    const [rotationAngle, setRotationAngle] = useState(-46.047);

    useEffect(() => {
        const frameCount = 25;
        const textures = [
            new THREE.TextureLoader().load(img1),
            new THREE.TextureLoader().load(img2),
            new THREE.TextureLoader().load(img3),
            new THREE.TextureLoader().load(img4),
            new THREE.TextureLoader().load(img5),
            new THREE.TextureLoader().load(img6),
            new THREE.TextureLoader().load(img7),
            new THREE.TextureLoader().load(img8),
            new THREE.TextureLoader().load(img9),
            new THREE.TextureLoader().load(img10),
            new THREE.TextureLoader().load(img11),
            new THREE.TextureLoader().load(img12),
            new THREE.TextureLoader().load(img13),
            new THREE.TextureLoader().load(img14),
            new THREE.TextureLoader().load(img15),
            new THREE.TextureLoader().load(img16),
            new THREE.TextureLoader().load(img17),
            new THREE.TextureLoader().load(img18),
            new THREE.TextureLoader().load(img19),
            new THREE.TextureLoader().load(img20),
            new THREE.TextureLoader().load(img21),
            new THREE.TextureLoader().load(img22),
            new THREE.TextureLoader().load(img23),
            new THREE.TextureLoader().load(img24),
            new THREE.TextureLoader().load(img25)
        ];

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(5, 5);
        const material = new THREE.MeshBasicMaterial({ map: textures[0], transparent: true });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
        camera.position.z = 10;

        let currentFrame = 0;
        const targetAngle = -20.835;
        const rotationStep = 0.1; // Скорость вращения

        const animate = () => {
            requestAnimationFrame(animate);

            if (rotationAngle < targetAngle) {
                setRotationAngle(prevAngle => prevAngle + rotationStep);
            }

            plane.rotation.z = THREE.MathUtils.degToRad(rotationAngle);

            currentFrame = (currentFrame + 1) % frameCount;
            plane.material.map = textures[currentFrame];
            renderer.render(scene, camera);
        };

        animate();

        return () => {
					if (mountRef.current) {
							mountRef.current.removeChild(renderer.domElement);
					}
					textures.forEach(texture => texture.dispose());
					material.dispose();
					geometry.dispose();
			};
	}, [rotationAngle]);

    return <div ref={mountRef} className="promo-animation-container" />;
};

export default PromoAnimation;

