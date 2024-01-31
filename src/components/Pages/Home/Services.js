import React, { useEffect } from "react";
import styles from "./Services.module.css";
import webDesignImg from "../../../images/web-design.png";
import webDevImg from "../../../images/web-dev.png";
import webAppImg from "../../../images/app-design.png";
import bgImg from "../../../images/servicesBg.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [controls, inView]);

  const hoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className={styles.container}
    >
      <div className={styles.contentBox}>
        <div className={styles.hBox}>
          <h1>PRVOKLASNA DIGITALNA USLUGA</h1>
          <p>
            Nudimo digitalne usluge prilagođene Vašim potrebama i poslovnim
            ciljevima. Neka Vaša firma bude više od samog logoa, web sajta i
            usluga koje nudite.
          </p>
        </div>
        <div className={styles.cardsBox}>
          <motion.div
            ref={ref}
            initial={{ x: -30, opacity: 0 }}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
            variants={hoverVariants}
            whileHover="hover"
            className={styles.card}
          >
            <div className={styles.numberImgBox}>
              <h1>01</h1>
              <img src={webDesignImg} alt="" height={80} width={70}></img>
            </div>

            <h2>WEB DIZAJN</h2>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ x: -30, opacity: 0 }}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
            variants={hoverVariants}
            whileHover="hover"
            className={styles.card}
          >
            <div className={styles.numberImgBox}>
              <h1>02</h1>
              <img src={webDevImg} alt="" height={60} width={60}></img>
            </div>

            <h2>IZRADA WEB SAJTOVA</h2>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ x: -30, opacity: 0 }}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
            variants={hoverVariants}
            whileHover="hover"
            className={styles.card}
          >
            <div className={styles.numberImgBox}>
              <h1>03</h1>
              <img src={webAppImg} alt="" height={70} width={70}></img>
            </div>

            <h2>IZRADA WEB APLIKACIJA</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
