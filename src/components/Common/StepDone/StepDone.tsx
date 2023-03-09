import React from 'react';
import styles from './stepDone.module.css';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';

interface IProps {
  title : string;
  name_controll : string;
};

function Done( { title, name_controll} : IProps) {

  const showWorkForWorker = () => {
   window.open(
      "https://fullstackdevh.github.io/input-modal/",
      "popUpWindow",
      "width=1200,height=700,top=200,left=100,toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no");
  }

  return (
    <>
      <div className={styles.wrapper__icon}>
        <DoneIcon className={styles.done__icon}></DoneIcon>
      </div>
      <Typography variant="h4" className={styles.done__text}>
        { title }
      </Typography>
      <button className="btn__auth btn__auth--done" onClick={showWorkForWorker}>
        {name_controll}
        {/* <Link href="/login">{name_controll}</Link> */}
      </button>
    </>
  );
}

export default Done;
