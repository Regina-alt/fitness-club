import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import styles from "./Join.module.scss";

export const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ey3cqop','template_xcxbdto',form.current, 'NKhNrdQAFq9wZR5VV').then((result)=>{
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className={styles.join}>
      <div className={styles.leftJ}>
        <hr />
        <div>
          <span className="strokeText">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="strokeText"> WITH US?</span>
        </div>
      </div>
      <div className={styles.rightJ}>
        <form ref={form} action="" className={styles.emailContainer} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button className={styles.bthJoin}>Join Now</button>
        </form>
      </div>
    </div>
  );
};
