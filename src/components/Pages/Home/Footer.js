import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../images/transparentlogo.png";
import facebookSvg from "../../../images/5305153_fb_facebook_facebook logo_icon.png";
import instagramSvg from "../../../images/1161953_instagram_icon.png";
import twitterSvg from "../../../images/104501_twitter_bird_icon.png";
import linkedInSvg from "../../../images/367593_linkedin_business_network_social_icon.png";
import worldMapImg from "../../../images/pexels-nataliya-vaitkevich-7235907.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(${worldMapImg})`,
          backgroundSize: "cover",
          filter: "grayscale(100%)",
        }}
        className={styles.bgImg}
      ></div>
      <div className={styles.contentBox}>
        <div className={styles.logoBox}>
          <img className={styles.logo} src={logo} alt=""></img>
          <p>
            Mi smo full-service digitalna agencija sa ciljem dostizanja
            vrhunskih performanse na internetu za sve naše klijente.
          </p>
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
        <div className={styles.linkBox}>
          <h1>LINKOVI</h1>
          <div className={styles.linkWordBox}>
            <p>O NAMA</p>
            <p>KONTAKT</p>
            <p>POLITIKA PRIVATNOSTI</p>
            <p>NAJCESCA PITANJA</p>
          </div>
        </div>

        <div className={styles.servicesBox}>
          <h1>USLUGE</h1>
          <div className={styles.servicesWordBox}>
            <p>WEB DIZAJN</p>
            <p>IZRADA WEB SAJTOVA</p>
            <p>IZRADA WEB APLIKACIJA</p>
          </div>
        </div>
        <div className={styles.contactBox}>
          <h1>KONTAKT</h1>
          <div className={styles.contact}>
            <FontAwesomeIcon className={styles.icon} icon={faPhoneVolume} />
            <p>+386 64 2258 667</p>
          </div>
          <div className={styles.contact}>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
            <p>info@s2dev.rs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
