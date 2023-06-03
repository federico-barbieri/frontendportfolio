import React from "react";
import law from "./NavBurger.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBurger = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleLogoClick = () => {
    setNavOpen(false); // Close the navigation
  };

  return (
    <div className={law.nav}>
      <div className={law.navContainer}>
        <div className={law.navbar}>
          <div className={law.logo}>
            <Link className={law.logoTxt} href="/" onClick={handleLogoClick}>
              <h1>FEDERICO BARBIERI</h1>
            </Link>
          </div>
          <div className={law.menuToggle} onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
        </div>
        <div
          className={law.navOverlay}
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className={law.navLinks}>
            <li className={law.navItem}>
              <Link
                className={law.menuItem}
                href="/Projects"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                PROJECTS
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                className={law.menuItem}
                href="/Contact"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                CONTACT
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
           
           
           
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default NavBurger;
