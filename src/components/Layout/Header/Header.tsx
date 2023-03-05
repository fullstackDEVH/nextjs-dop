import { Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import UserInfo from '../../Common/UserInfo';

import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useState } from 'react';
import Link from 'next/link';
const AVATAR = 'https://mui.com/static/images/avatar/1.jpg';
const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  // const { data: session, status }: any = useSession();
  // const { data: session, status }: any = useSession();
  // console.log(session);
  // const router = useRouter();
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }
  // if (status === 'authenticated') {
  //   return (
  //     <Box
  //       sx={{
  //         width: '100%',
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'space-between',
  //       }}
  //     >
  //       <p>My Profile</p>
  //       {/* <UserInfo avatar={user.avatar} displayName={user.displayName}></UserInfo> */}
  //       {/* <p>Signed in as {session.user.email}</p> */}
  //     </Box>
  //   );
  // }
  return (
    <header>
      <div className={styles.header__user}>
        <Link href="/" className={styles.header__user__logo}>
          <Image
            src="/VBPO_Logo.png"
            alt="logo"
            width={75}
            height={45}
            style={{ marginLeft: '4rem' }}
          />
        </Link>
        <div className={styles.header__user__container}>
          <div className={styles.header__user__controller}>
            <div className={styles.header__user__controller__detail}>
              <div className={styles.header__user__controller__detail_img}>
                <Image src="/bg.png" alt="" width={40} height={40} />
              </div>
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
    </header>
  );
};

export default Header;
