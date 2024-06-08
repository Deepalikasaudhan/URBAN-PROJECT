import React from 'react';
import './Spa.css';

const Spa = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}}>Spa for Women</h1 >
      <div className="image-grid1">
        <div>
        <p>Stress relief</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=spa_at_home">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700143543316-c5eb5c.jpeg" alt="Image 1" />
          </a>
        </div>
        <div>
        <p>Pain relief </p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=spa_at_home">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700143539186-26f4e5.jpeg" alt="Image 2" />
          </a>
        </div>
        <div>
        <p>Natural skincare</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=spa_at_home">
        <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700143553928-f5f936.jpeg" alt="Image 3" />
        </a>
        </div>
        
      </div>
    </div>
  );
}

export default Spa ;
