import React from 'react';
import './Spa.css';

const Cleaning = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}} >Cleaning & pest control</h1 >
      <div className="image-grid1">
        <div>
        <p>Full Home Cleaning</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=professional_sofa_cleaning">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700129474836-c5b146.jpeg" alt="Image 1" />
          </a>
        </div>
        <div>
        <p>Bathroom & Kitchen cleaning</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=professional_cleaning_services">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700141161917-028287.jpeg" alt="Image 2" />
          </a>
        </div>
        <div>
        <p>Sofa & Carpet Cleaning</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=professional_home_cleaning">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700204929955-75dd47.jpeg" alt="Image 3" />
          </a> 
        </div>
        
      </div>
      <div>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=ro_purchase">
        <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1712299434985-9073f5.jpeg" alt="" style={{margin:55 }} /></a>
      </div>
    </div>
    
  );
}

export default Cleaning;
