import React from 'react';
import './Spa.css';

const Mens = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}}>Massage for Men</h1 >
      <div className="image-grid1">
        <div>
        <p>Pain relief</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=massage_for_men">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700135813754-417df5.jpeg" alt="Image 1" />
         </a>
          </div>
        <div>
        <p>Stress relief </p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=massage_for_men">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700135826199-2ae5f2.jpeg" alt="Image 2" />
          </a>
        </div>
        <div>
        <p>Post workout</p>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=massage_for_men">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700135829701-85b36c.jpeg" alt="Image 3" />
          </a>
        </div>
        
      </div>
      <div>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=epc_stores_smarthome">
        <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705694675551-f56016.jpeg" alt="" style={{margin:55}} />
        </a>
      </div>

    </div>
  );
}

export default Mens ;
