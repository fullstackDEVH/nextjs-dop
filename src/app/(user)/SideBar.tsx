'use client';

import SideBarItem from './SideBarItem';
import styles from './sidebar.module.css';
import sidebar  from '@/lib/constants/sidebar';
import { useState } from 'react';

const SideBarProfile = () => {
  const [indexDropDown, setIndexDopDown] = useState<number>(0);

  const handleChooseDropDown = (indexDD: any) => {
    setIndexDopDown(indexDD);
  };

  return (
    <div className={styles.side__bar}>
      <div className={styles.side__bar__list}>
        {sidebar.map((item, ind) => (
          <SideBarItem
            name={item.name}
            sub_item={item.sub_item}
            key={ind}
            handleChooseDropDown={handleChooseDropDown}
            indexSidebar={ind}
            indexDropDown={indexDropDown}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBarProfile;
