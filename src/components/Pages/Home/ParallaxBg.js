import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import parallaxImg from "../../../images/parallaxImg.jpg";
import styles from "./Parallax.module.css";
import bussinesImg from "../../../images/financial-profit.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ParallaxBg = () => {
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

  return (
    <Parallax
      className={styles.parallaxImage}
      bgImage={parallaxImg}
      strength={800}
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={controls}
        transition={{ type: "tween", duration: 0.8 }}
        className={styles.container}
      >
        <div
          initial={{ x: -30, opacity: 0 }}
          animate={controls}
          transition={{ type: "tween", duration: 0.8 }}
          className={styles.iconBox}
        >
          <img src={bussinesImg} height={50} width={50} alt=""></img>
        </div>

        <h1>
          JEDINSTVENA REŠENJA ZA VAŠ{" "}
          <span style={{ color: "#ffaa17" }}>BIZNIS</span>
        </h1>
        <div ref={ref} className={styles.btnBox}>
          <button className={styles.btn1}>ZATRAZITE PONUDU</button>
          <button className={styles.btn2}>POZOVITE NAS</button>
        </div>
      </motion.div>
    </Parallax>
  );
};

export default ParallaxBg;
