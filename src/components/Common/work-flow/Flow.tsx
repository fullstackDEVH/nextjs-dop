'use client';

import { Color, Colors, initialEdges, initialNodes } from '@/lib/constants/configRoles';
import { DragEvent, useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
  MiniMap,
  Controls,
  Background,
  Viewport,
  updateEdge,
} from 'reactflow';

const defaultViewport: Viewport = { x: 200, y: 100, zoom: 1 };

import CustomNode from './CustomNode';

import styles from './flow.module.css';

const nodeTypes = {
  customNode: CustomNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: 'smoothstep',
};

const initBgColor = '#eee';

interface IProps {
  template: boolean;
}

function Flow({ template }: IProps) {
  const flowRef = useRef<HTMLDivElement>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  // https://reactflow.dev/docs/api/graph-util-functions/ update edge
  useEffect(() => {
    setNodes(template ? initialNodes : []);
  }, [template]);

  const handleSubmit = () => {
    console.log(JSON.stringify(edges));
  };

  const onNodesDelete = useCallback((elementsToRemove: any) => {
    // setNodes((els) => {
    //   return removeElements(elementsToRemove, els);
    // });
  }, []);

  const handleOnInit = useCallback(
    (instance: any) => {
      if (!reactFlowInstance) {
        setReactFlowInstance(instance);
        // có thể thêm tạo zoom here
      }
    },
    [reactFlowInstance]
  );

  const onEdgeUpdate = useCallback(
    (oldEdge: any, newConnection: any) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    []
  );

  const checkRolePermission = (role: string) => {
    switch (role) {
      case 'QA':
        return 4;
      case 'LC':
        return 3;
      case 'CK':
        return 2;
      case 'ET':
        return 1;
      default:
        return 0;
    }
  };

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      let sourceNode = nodes.find((node) => node.id === params.source);
      let targetNode = nodes.find((node) => node.id === params.target);

      if (
        checkRolePermission(sourceNode?.data.label) < checkRolePermission(targetNode?.data.label)
      ) {
        return alert('Cannot connect because source permission is less than target !!!');
      };

      setEdges((eds) => {
        return addEdge(params, eds);
      });
    },
    [setEdges]
  );

  const handleOnDragOver = (e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    console.log('drag flow');
  };

  const handleSwichRoles = (nameLabel: string) => {
    let label = nameLabel.toLowerCase();
    switch (label) {
      case 'entry':
        return 'ET';
      case 'checker':
        return 'CK';
      case 'lastcheck':
        return 'LC';
      case 'qa':
        return 'QA';
      default:
        return 'ET';
    }
  };

  const nodeColor = (node: any) => {
    switch (node.type) {
      case 'input':
        return '#6ede87';
      case 'output':
        return '#6865A5';
      default:
        return '#ff0072';
    }
  };

  const getLengthNodes = (label: string) => {
    let length = nodes.filter((node) => node.data.label === label).length;
    return length;
  };

  const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const nameRole = e.dataTransfer.getData('application/reactflow');
    let flowBounds, position;

    if (flowRef.current !== null) {
      flowBounds = flowRef.current.getBoundingClientRect();
    }

    if (reactFlowInstance !== null && flowBounds) {
      position = reactFlowInstance.project({
        x: e.clientX - flowBounds.left,
        y: e.clientY - flowBounds.top,
      });
    }

    const el: any = {
      id: 'n' + (nodes?.length + 1),
      type: 'customNode',
      data: {
        label: handleSwichRoles(nameRole),
        nameLabel:
          getLengthNodes(handleSwichRoles(nameRole)) + 1 < 1
            ? handleSwichRoles(nameRole)
            : `${handleSwichRoles(nameRole)}-${getLengthNodes(handleSwichRoles(nameRole)) + 1}`,
        // onChange: onChange, //fuc onchange nameRole (setHightlight)
        color: initBgColor,
        colorService: Colors.colorService[nameRole as keyof Color],
      },
      position: position,
    };

    setNodes((item) => {
      return [...item, el];
    });
  };

  return (
    <div className={styles.flow} ref={flowRef}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        // fitView

        onInit={handleOnInit}
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
        onNodesDelete={onNodesDelete}
        onEdgeUpdate={onEdgeUpdate}
        defaultViewport={defaultViewport}
      >
        <MiniMap
          nodeStrokeWidth={3}
          zoomable
          pannable
          style={{ cursor: 'pointer' }}
          nodeColor={nodeColor}
        />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
