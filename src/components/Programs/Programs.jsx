import React from "react";
import { programsData } from "../../data/programsData";

import styles from "./Programs.module.scss";

const Programs = () => {
  return (
    <div className={styles.programs} id="programs">
      {/* header */}
      <div className={styles.programsHeader}>
        <span className="strokeText">Explore our</span>
        <span>Programs</span>
        <span className="strokeText">to shape you</span>
      </div>

      {/* program categories */}
      <div className={styles.programsCategories}>
        {programsData.map((program, i) => (
          <div className={styles.category} key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className={styles.joinNow}>
              <span>Join Now</span>
              <img src="/img/rightArrow.png" alt="rightArrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
