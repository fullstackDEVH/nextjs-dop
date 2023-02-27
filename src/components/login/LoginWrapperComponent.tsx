import { ReactNode } from "react";
import styles from "@/styles/LoginWrapperComponent.module.css";

type LoginWrapperProps = {
  children: ReactNode;
};
function LoginWrapper({ children }: LoginWrapperProps) {
  return (
    <div className={styles.login__wrapper}>
      <div className={styles.loginwrapper__container}>{children}</div>
    </div>
  );
}
export default LoginWrapper;
