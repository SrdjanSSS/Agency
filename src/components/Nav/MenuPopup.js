import React from "react";
import styles from "./MenuPopup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import facebookSvg from "../../images/5305153_fb_facebook_facebook logo_icon.png";
import instagramSvg from "../../images/1161953_instagram_icon.png";
import twitterSvg from "../../images/104501_twitter_bird_icon.png";
import linkedInSvg from "../../images/367593_linkedin_business_network_social_icon.png";
import { motion } from "framer-motion";

const MenuPopup = ({ setMenuPopup }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ type: "tween", duration: 0.8 }}
      className={styles.container}
      onClick={() => setMenuPopup(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.popup}>
        <div className={styles.xIconBox}>
          <FontAwesomeIcon
            onClick={() => setMenuPopup(false)}
            className={styles.icon}
            icon={faXmark}
          />
        </div>
        <div className={styles.pages}>
          <h1>NASLOVNA</h1>
          <h1>USLUGE</h1>
          <h1>PROJEKTI</h1>
          <h1>O NAMA</h1>
          <h1>KONTAKT</h1>
          <div className={styles.btnBox}>
            <button>BOOK A CALL</button>
          </div>
        </div>
        <div className={styles.menuFooter}>
          <h2>Hajde da počnemo sa Vašim projektom!</h2>
          <div className={styles.emailNumberBox}>
            <div className={styles.contact}>
              <FontAwesomeIcon
                className={styles.contactIcon}
                icon={faPhoneVolume}
              />
              <p>+386 64 2258 667</p>
            </div>
            <div className={styles.contact}>
              <FontAwesomeIcon
                className={styles.contactIcon}
                icon={faEnvelope}
              />
              <p>info@s2dev.rs</p>
            </div>
          </div>
          <div className={styles.iconBox}>
            <div className={styles.iconCircle}>
              <img src={facebookSvg} alt="" height={20} width={20}></img>
            </div>
            <div className={styles.iconCircle}>
              <img src={instagramSvg} alt="" height={20} width={20}></img>
            </div>
            <div className={styles.iconCircle}>
              <img src={twitterSvg} alt="" height={20} width={20}></img>
            </div>
            <div className={styles.iconCircle}>
              <img src={linkedInSvg} alt="" height={20} width={20}></img>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuPopup;
