import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <hr />
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          <img src="img/github.png" alt="github" />
          <img src="img/instagram.png" alt="instagram" />
          <img src="img/linkedin.png" alt="linkedin" />
        </div>
        <div className={styles.logoF}>
          <img src="img/logo.png" alt="logo" />
        </div>
      </div>
    
    <div className={styles.footerBlur1}></div>
    <div className={styles.footerBlur2}></div>
    </div>
  );
};

export default Footer;
