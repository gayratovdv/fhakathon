import React from "react";
import "./navbar.css";
import Images from "../../utils/images";

const Navbar = () => {
  return( 
    <nav>
      <div className="container">
        <div className="navbar">
          <img src={Images.navbarLogo} alt="Navbar Logo1" />
          <div className="navbar__right">
            <select>
              <option selected value="1">Ru</option>
              <option value="1">Uz</option>
            </select>
            <p>Sunnatbek Yusupov</p>
            <img src={Images.leftIcon} alt="Left Icon1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
