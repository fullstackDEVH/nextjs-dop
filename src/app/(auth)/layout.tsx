import { ReactNode } from 'react';
import styles from './layout.module.css';
type Props = {
  children: ReactNode;
};
function LayoutAuth({ children }: Props) {
  return (
    <div
      style={{
        backgroundImage: 'url(/bg1.png)',
      }}
      className={styles.auth__wrapper}
    >
      <div className={styles.auth__container}>{children}</div>
    </div>
  );
}
export default LayoutAuth;
