import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import SettingsIcon from '@mui/icons-material/Settings';

import styles from './sideBarItem.module.css';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';

interface ISubItem {
  sub_name: string;
}

interface Props {
  name: string;
  sub_item: ISubItem[];
  indexSidebar: number;
  indexDropDown: number;
  handleChooseDropDown: (index: number) => void;
}

const SideBarItem: React.FC<Props> = ({
  name,
  sub_item,
  indexSidebar,
  indexDropDown,
  handleChooseDropDown,
}: Props) => {
  return (
    <div className={styles.side_bar_item}>
      <div
        className={`${styles.side_bar_item__main} ${
          indexDropDown === indexSidebar ? styles.active : ''
        }`}
        onClick={() => handleChooseDropDown(indexSidebar)}
      >
        <div className={styles.side_bar_item__main_left}>
          <PersonIcon sx={{ fontSize: '1.4rem' }} />
          <div className={styles.side_bar_item__main_name}>{name}</div>
        </div>
        <ArrowForwardIosIcon className={styles.side_bar_item__main_icon_arrow} />
      </div>

      <div className={styles.side_bar__sub__list}>
        {sub_item.map(({ sub_name }, index) => (
          <div className={styles.side_bar__sub__item} key={sub_name + index}>
            <CircleIcon style={{ fontSize: '8', color: 'white' }} />
            <div className={styles.side_bar__sub__item__name}>{sub_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarItem;
