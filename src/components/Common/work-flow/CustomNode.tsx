'use client';

import { Color, Colors } from '@/lib/constants/configRoles';
import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const CustomNode: FC<NodeProps> = (props) => {
  
  const { data, xPos, yPos } = props;

  

  return (
    <>
    {data?.label !== 'QA' ? (
        <Handle type="target" position={Position.Top}  />
      ) : null}
     
      <div>
        <div style={{ padding: '7px', border: `5px solid ${Colors.colorService[data.label as keyof Color]}` }}>
          Label: <strong>{data.nameLabel}</strong>
        </div>
      </div>

      {data?.label !== 'ET' ? (
        <Handle type="source" id="a" position={Position.Bottom}  />
      ) : null}
    </>
  );
};

export default memo(CustomNode);
