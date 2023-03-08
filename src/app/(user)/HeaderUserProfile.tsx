'use client';

import Image from 'next/image';
import styles from './header.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useState } from 'react';

const HeaderUserProfile = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={styles.header__user}>
      <div className={styles.header__user__logo}>
        <Image src="/logo.png" alt="img" width={70} height={62} style={{ marginLeft: '4rem' }} />
      </div>

      <div className={styles.header__user__container}>
        <h3>MY PROFILE</h3>

        <div className={styles.header__user__controller}>
          <div className={styles.header__user__controller__detail}>
            {/* img */}
            <div className={styles.header__user__controller__detail_img}>
              <Image src="/bg.png" alt="" width={40} height={40} />
            </div>

            {/* text */}
            <div
              className={styles.header__user_controller__detail_contain}
              onClick={() => setShowDropDown((pre) => !pre)}
            >
              <span>abcxyz@gmail.com</span>
              <ArrowDropDownIcon style={{ color: 'white' }} />

              <div
                className={`${styles.header__user_controller__detail_contain__drop_down} ${
                  showDropDown ? styles.show : ''
                }`}
              >
                <div className={styles.contain__drop_down__item}>
                  <AccountCircleOutlinedIcon />
                  <p>My Profile</p>
                </div>
                <div className={styles.contain__drop_down__item}>
                  <ExitToAppOutlinedIcon />
                  <p>Log Out</p>
                </div>
              </div>
            </div>

            <span className={styles.solid}></span>

            <div className={styles.header__user_controller__language}>
              <Image src="/language.png" alt="icon world" width={24} height={24} />
              <span>ENG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUserProfile;
