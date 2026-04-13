import React from "react";
import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink  } from "react-router-dom";
const Footers = () => {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">

        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;

          return (
            <div className="footer-contact" key={title}>
              
              <div className="icon">
                {footerIcon[icon] || <span>❓</span>}
              </div>

              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>

            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>&copy; 2026 WorldAtlas. All rights reserved.
              <NavLink to="">Privacy Policy</NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/about">About</NavLink>
                </li>
                
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="https://www.instagram.com/asif____013?igsh=eW5scjdmNjBpeGhy" target="_blank">Social</NavLink>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/countries">Countries</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footers;