import React from "react";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";

import Header from "../Header/Header";

function Hero() {
  const transition = { type: "spring", duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.heroBlur}></div>
      <div className={styles.leftH}>
        <Header />
        {/* the best ad */}
        <div className={styles.theBestAd}>
          <motion.div
            className={styles.yellowBlock}
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero text */}
        <div className={styles.heroText}>
          <div>
            <span className="strokeText">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className={styles.heroSubText}>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </div>
        </div>

        {/* figures */}
        <div className={styles.figures}>
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className={styles.heroButton}>
          <button>Get started</button>
          <button>Learn more</button>
        </div>
      </div>

      <div className={styles.rightH}>
        <button>Join Now</button>

        <motion.div
          className={styles.heartRate}
          transition={transition}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
        >
          <img src="/img/heart.png" alt="Heart Rate" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img
          src="/img/hero_image.png"
          alt="Hero Image"
          className={styles.heroImage}
        />
        <motion.img
          src="/img/hero_image_back.png"
          alt="Hero Image"
          className={styles.heroImageBack}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* calories */}
        <motion.div
          className={styles.calories}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src="/img/calories.png" alt="Calories" />
          <div className={styles.caloriesContent}>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
