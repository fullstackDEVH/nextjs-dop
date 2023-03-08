"use client";

import { Grid } from '@mui/material';
import HeaderUserProfile from './HeaderUserProfile';
import SideBarProfile from './SideBar';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderUserProfile />

      <Grid container style={{backgroundImage: "url(/bg-profile.png)", backgroundPosition: "center",width: "100%", backgroundSize:"cover"}} >
        <Grid item xs={2.5}>
          <SideBarProfile />
        </Grid>
        <Grid item xs={9.5}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  );
}
