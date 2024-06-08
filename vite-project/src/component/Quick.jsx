import React from 'react';
import './ImageColumns.css';

const Quick = () => {
  return (
    <div>
      <h1 style={{marginLeft:"60px", marginTop:"50px"}} >Quick home repairs</h1 >
      <div className="image-grid">
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=electricians&screen=seq_seq2hl">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653646139213-3c072a.png" alt="Image 1" /></a>
          <p>Fan repairs</p>
          <p>* 4.83 (453.5k)</p>
          <p>₹109</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=plumbers">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652172643970-9ad67b.png" alt="Image 2" /></a>
          <p>Tap repairs</p>
          <p>* 4.80 (352.4k)</p>
          <p>₹49</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=electricians">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653648546142-327cb9.png" alt="Image 3" /></a>
          
          <p>Ceiling fan installation</p>
          <p>* 4.78 (1.5M)</p>
          <p>₹89</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=electricians">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653890923765-57dea3.png" alt="Image 4" /></a>
          <p>Jet spray (installation/repair)</p>
          <p>* 4.89 (532.5k)</p>
          <p>₹79</p>
        </div>
        <div>
          <a href="https://www.urbancompany.com/cart?city=city_kanpur_v2&category=electricians">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701149688871-2980d1.jpeg" alt="Image 5" /></a>
          <p>Switch/ socket replacement</p>
          <p>* 4.82 (1.1M)</p>
          <p>₹49</p>
        </div>
      </div>
    </div>
  );
}

export default Quick;
