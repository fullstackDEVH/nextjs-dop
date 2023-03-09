import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import styles from './wrapperform.module.css';
interface Props {
  title: string;
  children: ReactNode;
}

export default function WrapperForm({ title, children }: Props) {
  return (
    <div className={styles.wrap}>
      {/* <Typography
        variant="h4"
        sx={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        {title}
      </Typography> */}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
