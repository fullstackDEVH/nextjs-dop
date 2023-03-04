'use client';

import SideBarItem from './SideBarItem';
import styles from './sidebar.module.css';
import { useState } from 'react';
import { SIDE_BAR } from '@/lib/constants';

const SideBar = () => {
  const [indexDropDown, setIndexDopDown] = useState<number>(0);

  const handleChooseDropDown = (indexDD: any) => {
    setIndexDopDown(indexDD);
  };

  return (
    <div className={styles.side__bar}>
      <div className={styles.side__bar__list}>
        {SIDE_BAR.map((item, ind) => (
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

export default SideBar;
