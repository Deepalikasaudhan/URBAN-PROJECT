import React from 'react';
import './Salon.css';

const Salon = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}}>Salon for Women</h1 >
      <div className="image-grid">
        <div>
        <p>Waxing</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=salon_at_home">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717397992635-09b511.jpeg" alt="Image 1" />
          </a>
        </div>
        <div>
        <p>Facial & Cleanup </p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=salon_at_home">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717397984511-247afe.jpeg" alt="Image 2" />
          </a> 
        </div>
        <div>
        <p>Pedicure</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=salon_at_home">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398009148-4b7a11.jpeg" alt="Image 3" />
          </a>  
        </div>
        
        <div>
        <p>Manicure</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=salon_at_home">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398005609-e19abc.jpeg" alt="Image 4" />
          </a>
        </div>
        <div>
        <p>Bleach & Detan</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=salon_at_home">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398014369-209a76.jpeg" alt="Image 5" />
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Salon ;
