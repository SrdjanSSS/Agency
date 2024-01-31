import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import Services from "./Services";
import WhyUs from "./WhyUs";
import ParallaxBg from "./ParallaxBg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Services />
      <WhyUs />
      <ParallaxBg />
      <Footer />
    </div>
  );
};

export default Home;
