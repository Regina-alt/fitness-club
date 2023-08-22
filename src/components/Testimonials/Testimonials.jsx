import React from "react";

import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  const [selected, setSelected] = React.useState(0);
  const tLength = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };

  return (
    <div className={styles.testimonials} id="testimonials">
      <div className={styles.leftT}>
        <span>Testimonials</span>
        <span className="strokeText">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className={styles.nameT}>
            {testimonialsData[selected].name}
          </span>{" "}
          -{" "}
          <span className={styles.statusT}>
            {testimonialsData[selected].status}
          </span>
        </span>
      </div>

      <div className={styles.rightT}>
        <motion.div
          className={styles.divBorder}
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          className={styles.divBack}
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={transition}
          className={styles.imageT}
          src={testimonialsData[selected].image}
          alt="testimonials"
        />

        <div className={styles.arrows}>
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src="/img/leftArrow.png"
            alt="leftArrow"
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src="/img/rightArrow.png"
            alt="rightArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
