import React from "react";
import "./navbar.css";
import Images from "../../utils/images";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <img src={Images.navbarLogo} alt="Navbar Logo1" />
          <div className="navbar__right">
            <select>
              <option value="1">Ru</option>
              <option selected value="1">
                Uz
              </option>
            </select>
            <p>Sunnatbek Yusupov</p>
            <Link
              style={{ color: "black", textdecoration: "none" }}
              to="https://gayratovdv.github.io/fhakathon/"
            >
              {" "}
              <IoIosLogOut />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
