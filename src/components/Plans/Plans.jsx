import React from "react";

import { plansData } from "../../data/plansData";

import styles from "./Plans.module.scss";

const Plans = () => {
  return (
    <div className={styles.plansContainer} id="plans">
      <div className={styles.planBlur1}></div>
      <div className={styles.planBlur2}></div>
      <div className={styles.plansHeader}>
        <span className="strokeText">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="strokeText">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className={styles.plans}>
        {plansData.map((plan, i) => (
          <div className={styles.plan} key={i}>
            {plan.icon}
            <span className={styles.planName}>{plan.name}</span>
            <span className={styles.price}>$ {plan.price}</span>

            <div className={styles.features}>
              {plan.features.map((feature, i) => (
                <div className={styles.feature} key={i}>
                  <img src="img/whiteTick.png" alt="whiteTick" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div className={styles.benefits}>
              <span>See more benefits →</span>
            </div>
            <button className={styles.benefitsBtn}>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
