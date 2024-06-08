import React from 'react';
import './Spa.css';

const SalonMen = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}}>Massage for Men</h1>
      <div className="image-grid1">
        <div>
        <p>Haircut & Beard</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=mens_grooming">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127735237-fc713d.jpeg" alt="Image 1" />
          </a>
        </div>
        <div>
        <p>Hair Color & Hair spa </p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=mens_grooming">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127754257-2bc2e7.jpeg" alt="Image 2" />
          </a>
        </div>
        <div>
        <p>Facial & Cleanup</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=mens_grooming"></a>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127746630-a2db1c.jpeg" alt="Image 3" />
    </div>
    <div>
        <p>Pedicure & Manicure</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=mens_grooming">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127758209-ba8237.jpeg" alt="Image 4" />
          </a>
    </div>
        
</div>
      
    </div>
  );
}

export default SalonMen ;
