"use client";

import { ReactNode } from "react";

import PublicIcon from "@mui/icons-material/Public";

import styles from "@/styles/LogoLanguageComponent.module.css";
import Logo from "@/imgs/VBPO_Logo.png";
function LogoLanguage() {
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
        <img src={Logo.src} alt="Logo_VBPO" />
      </div>
      <div className={styles.language}>
        <PublicIcon className={styles.language__icon} />
        <span>ENG</span>
      </div>
    </div>
  );
}
export default LogoLanguage;
