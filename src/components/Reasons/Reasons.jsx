import React from "react";
import styles from "./Reasons.module.scss";

const Reasons = () => {
  return (
    <div className={styles.reasons} id="reasons">
      <div className={styles.leftR}>
        <img src="/img/image1.png" alt="image1" />
        <img src="/img/image2.png" alt="image2" />
        <img src="/img/image3.png" alt="image3" />
        <img src="/img/image4.png" alt="image4" />
      </div>
      <div className={styles.rightR}>
        <span className={styles.orangeText}>some reasons</span>
        <div>
          <span className="strokeText">why</span>
          <span> choose us?</span>
        </div>

        <div className={styles.detailsR}>
          <div>
            <img src="/img/tick.png" alt="tick" />
            <span>OCER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src="/img/tick.png" alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src="/img/tick.png" alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src="/img/tick.png" alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span className={styles.partnersSpan}>OUR PARTNERS</span>
        <div className={styles.partners}>
          <img src="/img/nb.png" alt="nb" />
          <img src="/img/adidas.png" alt="adidas" />
          <img src="/img/nike.png" alt="nike" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
