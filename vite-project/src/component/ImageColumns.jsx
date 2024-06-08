import React from 'react';
import './ImageColumns.css';



const ImageColumns = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}}>New and noteworthy</h1>
      <div className="image-grid">
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=ac_service_repair">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700124385012-7be2b4.jpeg" alt="Image 1" />
        </a>
          <p>Native Smart Look</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=ro_purchase">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1687428458328-9e147d.jpeg" alt="Image 2" />
          </a>
          <p>Native Water Purifier</p>
        </div>
        <div>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=professional_cleaning_services">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg" alt="Image 3" />
          </a>
          <p>Bathroom & Kitchen cleaning</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=house_painters">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040419628-022a2b.jpeg" alt="Image 4" />
         </a>
          <p>Painting & Waterproofing</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=women_hair_services">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040420198-fe6d1d.jpeg" alt="Image 5" />
         </a>
          <p>Hair Studio for Women</p>
        </div>
      </div>
    </div>
  );
}

export default ImageColumns;



