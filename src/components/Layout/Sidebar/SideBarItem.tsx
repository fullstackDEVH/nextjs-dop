import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import styles from './sideBarItem.module.css';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

interface ISubItem {
  sub_name: string;
  sub_link: string;
}

interface Props {
  name: string;
  sub_item?: ISubItem[];
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
          <PersonIcon sx={{ fontSize: '1.6rem' }} />
          <div className={styles.side_bar_item__main_name}>{name}</div>
        </div>
        {sub_item && sub_item.length > 0 && (
          <ArrowForwardIosIcon className={styles.side_bar_item__main_icon_arrow} />
        )}
      </div>

      <div className={styles.side_bar__sub__list}>
        {sub_item?.map(({ sub_name, sub_link }, index) => (
          <Link
            style={{ textDecoration: 'none', color: '#FFF' }}
            key={sub_name + index}
            href={`${sub_link}`}
          >
            <div className={styles.side_bar__sub__item}>
              {/* <CircleIcon style={{ fontSize: '8', color: 'white' }} /> */}
              <div className={styles.side_bar__sub__item__name}>{sub_name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBarItem;
