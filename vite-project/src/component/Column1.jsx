import React from 'react';
import './ImageColumns.css';

const ImageColumns = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}} >Most booked services</h1 >
      <div className="image-grid">
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=ac_service_repair&screen=seq_seq1j1">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682671878656-d02ec7.jpeg" alt="Image 1" />
          </a>
          <p>Pawer Saver AC service</p>
          <p>* 4.83 (453.5k)</p>
          <p>₹549</p>
         
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=ac_service_repair&screen=seq_seq1kq">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652168690740-f5ed68.png" alt="Image 2" />
          </a>
          <p>Native Water Purifier</p>
          <p>* 4.80 (352.4k)</p>
          <p>₹299</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=professional_cleaning_services&screen=seq_seq1mu">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png" alt="Image 3" />
          </a>
          <p>Bathroom & Kitchen cleaning</p>
          <p>* 4.78 (1.5M)</p>
          <p>₹449</p>
        </div>
        <div>
        <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=mens_grooming&screen=seq_seq1nh">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519626723-82ff21.jpeg" alt="Image 4" />
          </a>
          <p>Painting & Waterproofing</p>
          <p>* 4.89 (532.5k)</p>
          <p>₹199</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=professional_cleaning_services&screen=seq_seq1p1">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1656047929083-beff0d.jpeg" alt="Image 5" />
          </a>
          <p>Hair Studio for Women</p>
          <p>* 4.82 (1.1M)</p>
          <p>₹349</p>
        </div>
      </div>
    </div>
  );
}

export default ImageColumns;
