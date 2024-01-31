import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import logo from "../../images/transparentlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuPopup from "./MenuPopup";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuPopup, setMenuPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${
        scrolling ? styles.containerScrolling : ""
      }`}
    >
      <img src={logo} alt="logo" className={styles.logo}></img>

      <div className={styles.navBox}>
        <h4>NASLOVNA</h4>
        <h4>PROJEKTI</h4>
        <h4>USLUGE</h4>
        <h4>O NAMA</h4>
        <h4>KONTAKT</h4>
        <button>BOOK A CALL</button>
      </div>
      <FontAwesomeIcon
        onClick={() => setMenuPopup(true)}
        className={styles.icon}
        icon={faBars}
      />
      {menuPopup && <MenuPopup setMenuPopup={setMenuPopup} />}
    </div>
  );
};

export default Nav;
