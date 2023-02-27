import React from "react";
import styles from "@/app/signup/signup.module.css";

import Button from "@mui/material/Button";
import Img from "@/imgs/mail.png";
function Done(){
  return (
    <div className={styles.signupcontent}>
      <div className={styles.signupcontent__title}>DONE</div>
      <div className={styles.signupcontent__form}>
        <img src={Img.src} alt="" />
        <h2>Your Email Is Successfully Verified</h2>
        <Button href="/login" className="btn" variant="contained" >
          Login Now
        </Button>
      </div>
    </div>
  ); 
};

export default Done;
