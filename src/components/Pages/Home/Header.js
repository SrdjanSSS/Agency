import React from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import headerImg from "../../../images/headerBg.jpg";
import TypingEffect from "./TypingEffect";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ type: "tween", duration: 5 }}
        style={{
          backgroundImage: `url(${headerImg})`,
          filter: "grayscale(70%)",
          width: "100%",
        }}
        className={styles.container}
      ></motion.div>
      <div className={styles.hBox}>
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          DIGITALNA AGENCIJA S2 DEV
        </motion.h3>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className={styles.whiteH1}>
            UNAPREĐUJEMO VAŠE POSLOVANJE KROZ
            <TypingEffect />
          </h1>
        </motion.div>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ZATRAZI PONUDU
        </motion.button>
      </div>
    </>
  );
};

export default Header;
