// export default function LayoutAuth({ children }: any) {
//   return (
//     <>
//       <head />
//       <header>Header</header>
//       <main>{children}</main>
//       <footer>Footer</footer>
//     </>
//   );
// }

import { ReactNode } from 'react';
import styles from './layout.module.css';
import bg from '@/static/imgs/bg1.png';
type LoginWrapperProps = {
  children: ReactNode;
};
function LayoutAuth({ children }: LoginWrapperProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className={styles.auth__wrapper}
    >
      <div className={styles.auth__container}>{children}</div>
    </div>
  );
}
export default LayoutAuth;
