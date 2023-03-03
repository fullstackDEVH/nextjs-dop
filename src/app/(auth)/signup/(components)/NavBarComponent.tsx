import styles from '../signup.module.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/static/imgs/VBPO_Logo.png';
const NavBarComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__header}>
        <Image src={Logo} alt="Logo" height={52} />
      </div>
      <div className={styles.navbar__content}>
        <div className={styles.step}>
          <div className={styles.line}></div>
          <div className={styles.step__cicle}>1</div>
          <label className={styles.step__label}>Create Account</label>
        </div>
        <div className={styles.step}>
          <div className={styles.line}></div>
          <div className={styles.step__cicle}>2</div>
          <label className={styles.step__label}>Basic Information</label>
        </div>
        <div className={styles.step}>
          <div className={styles.line}></div>
          <div className={styles.step__cicle}>3</div>
          <label className={styles.step__label}>Verification</label>
        </div>
        <div className={styles.step}>
          <div className={styles.step__cicle}>4</div>
          <label className={styles.step__label}>Done</label>
        </div>
      </div>
      <div className={styles.navbar__footer}>
        <PersonOutlineIcon className={styles.navbar__icon} />
        <Link href="/login" className={styles.navbar__link}>
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default NavBarComponent;
