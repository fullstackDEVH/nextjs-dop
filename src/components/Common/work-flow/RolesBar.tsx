import { Colors } from '@/lib/constants/configRoles';
import { Button } from '@mui/material';
import { DragEvent } from 'react';
import DialogConfirm from './Diaglog';

import styles from './roleBar.module.css';

const initBgColor = '#eee';

const elements = [
  {
    id: 'n1',
    type: 'selectorNode',
    data: {
      label: 'Entry',
      color: initBgColor,
      colorService: Colors.colorCollector,
    },
    position: { x: 0, y: 50 },
    sourcePosition: 'right',
  },
  {
    id: 'n3',
    type: 'selectorNode',
    data: {
      label: 'Checker',
      color: initBgColor,
      colorService: Colors.colorCurator,
    },
    position: { x: 100, y: 50 },
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: 'n5',
    type: 'selectorNode',
    data: {
      label: 'LastCheck',
      color: initBgColor,
      colorService: Colors.colorTransformer,
    },
    position: { x: 200, y: 50 },
    targetPosition: 'left',
    sourcePosition: 'right',
  },
  {
    id: 'n7',
    type: 'selectorNode',
    data: {
      label: 'QA',
      color: initBgColor,
      colorService: Colors.colorMapper,
    },
    position: { x: 300, y: 100 },
    targetPosition: 'left',
    sourcePosition: 'null',
  },
];

const RolesBar = () => {
  const onDragStart = (e: DragEvent<HTMLDivElement>, nameRole: string) => {
    e.dataTransfer.setData('application/reactflow', nameRole);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className={styles.role__bar}>
      <h2>Roles</h2>

      {elements.map((role) => (
        <div
          className={styles.role__bar__contain}
          key={role.data.label}
          onDragStart={(e) => onDragStart(e, role.data.label)}
        >
          <div
            className={styles.role__bar__contain__item}
            draggable="true"
            style={{ borderColor: role.data.colorService }}
          >
            {role.data.label}
          </div>
        </div>
      ))}

      <div
        className="roles__btns"
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '4rem' }}
      >
        <Button variant="outlined">
          Template
        </Button>
        <Button variant="outlined">
          Custom
        </Button>
        <DialogConfirm />
      </div>
    </div>
  );
};

export default RolesBar;
