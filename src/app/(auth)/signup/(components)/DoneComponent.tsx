import React from 'react';
import styles from '../signup.module.css';

import Button from '@mui/material/Button';
import Img from '@/static/imgs/mail.png';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
function Done() {
  return (
    <>
      <div className={styles.wrapper__icon}>
        <DoneIcon className={styles.done__icon}></DoneIcon>
      </div>
      <Typography variant="h4" className={styles.done__text}>
        Complete Account
      </Typography>
      <button className="btn__auth btn__auth--done">
        <Link href="/login">Login Now</Link>
      </button>
    </>
  );
}

export default Done;
