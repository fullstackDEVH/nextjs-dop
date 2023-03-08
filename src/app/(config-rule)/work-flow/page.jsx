'use client'

import Flow from '@/components/Common/work-flow/Flow';
import RolesBar from '@/components/Common/work-flow/RolesBar';

import styles from './work-flow.module.css';

const Home = () => {
  
  return (
    <div className={styles.container}>
      <RolesBar />
      <Flow template={true} />

    </div>
  );
};

export default Home;