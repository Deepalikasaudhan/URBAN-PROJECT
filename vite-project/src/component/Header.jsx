import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg" alt="UC Logo" className="uc-logo" />
        
      </div>
      <div className="location-search">
        <div className="location">
          <span role="img" aria-label="location">📍</span> 
          <span>Tilak Nagar, Kanpur</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <input type="text" placeholder="Search for 'AC service'" className="search-input" />
      </div>
      <button className="login-button">Login</button>
    </header>
  );
};

export default Header;
