'use client'

import Flow from '@/components/Common/work-flow/Flow';
import RolesBar from '@/components/Common/work-flow/RolesBar';

import 'reactflow/dist/style.css';
import styles from './config-roles.module.css';


interface IProps {
  handleNextStep : () => void;
  handlePreStep : () => void;
}


const ConfigRoles = ( { handleNextStep, handlePreStep } : IProps) => {
  
  return (
    <div className={styles.container}>
      <RolesBar handleNextStep={handleNextStep} handlePreStep={handlePreStep} />
      <Flow template={true} />

    </div>
  );
};

export default ConfigRoles;