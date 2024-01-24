import React from 'react';
import './index.css';
import img2 from '../../img/promo__page_img/Img2.png';
import img2_mobile from '../../img/promo__page_img/Img2_mobile.png';


function Approach() {
  return (
    <div>
      <section className="approach">
        <div className="approach__wrapper">
          <h2 className="approach__title h2">
					While you spent time with your family, our solutions work towards your success.
          </h2>
          <p className="p1">
            We leverage top-tier Internet marketing tools to ensure the success of our valued partners. Our commitment includes a customer-centric approach, delivering predictable results, and an unwavering focus on enhancing profitability.
          </p>
					<img src={img2_mobile} alt={img2_mobile} className="img2_mobile" />

        </div>
      </section>
    </div>
  );
}

export default Approach;

