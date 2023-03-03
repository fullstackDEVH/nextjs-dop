'use client';

import PublicIcon from '@mui/icons-material/Public';
import styles from '../layout.module.css';
import Logo from '@/static/imgs/VBPO_Logo.png';
import Image from 'next/image';
function HeaderAuth() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" height={52} />
      </div>
      <div className={styles.language}>
        <PublicIcon className={styles.language__icon} />
        <span className={styles.language__text}>ENG</span>
      </div>
    </div>
  );
}
export default HeaderAuth;
