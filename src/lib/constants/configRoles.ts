import { Edge, Node } from 'reactflow';

export interface Color {
    ET: string;
    CK: string;
    LC: string;
    QA: string;
  }

  

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'customNode',
    data: { 
      nameLabel : "QA",
      label: 'QA' },
    position: { x: 290.4200621649317, y: -90 },
  },
  {
    id: '2',
    type: 'customNode',
    data: { 
      nameLabel : "LC-1",
      label: 'LC' },
    position: { x: 164.54272761986948, y: 37 },
  },
  {
    id: '3',
    data: { 
      nameLabel : "LC-2",
      label: 'LC' },
    type: 'customNode',

    position: { x: 414.78438025996456, y: 37 },
  },
  {
    id: '4',
    data: { 
      nameLabel : "CK-1",
      label: 'CK' },
    position: { x: 603.3196088344752, y: 124 },
    type: 'customNode',
  },
  {
    id: '5',
    data: { 
      nameLabel : "CK-2",
      label: 'CK' },
    position: { x: 417.2304753249555, y: 124 },
    type: 'customNode',
  },
  {
    id: '6',
    data: { 
      nameLabel : "CK-3",
      label: 'CK' },
    position: { x: 163.36813887061078, y: 124 },
    type: 'customNode',
  },
  {
    id: '7',
    data: { 
      nameLabel : "CK-4",
      label: 'CK' },
    position: { x: -26.167089703899876, y: 124 },
    type: 'customNode',
  },
  {
    id: '10',
    data: { 
      nameLabel : "ET-1",
      label: 'ET' },
    position: { x: 612.5091956744513, y: 230 },
    type: 'customNode',
  },
  {
    id: '11',
    data: { 
      nameLabel : "ET-2",
      label: 'ET' },
    position: { x: 416.98146614529946, y: 230 },
    type: 'customNode',
  },
  {
    id: '12',
    data: { 
      nameLabel : "ET-3",
      label: 'ET' },
    position: { x: -26.73231445984578, y: 230 },
    type: 'customNode',
  },
  {
    id: '13',
    data: { 
      nameLabel : "ET-4",
      label: 'ET' },
    position: { x: 795.4573733038327, y: 230 },
    type: 'customNode',
  },
  {
    id: '14',
    data: { 
      nameLabel : "ET-5",
      label: 'ET' },
    position: { x: 166.06692138503848, y: 230 },
    type: 'customNode',
  },
  {
    id: '15',
    data: { 
      nameLabel : "ET-6",
      label: 'ET' },
    position: { x: -189.73780030473011, y: 230 },
    type: 'customNode',
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  {
    animated: true,
    type: 'smoothstep',
    source: '2',
    sourceHandle: 'a',
    target: '6',
    targetHandle: null,
    id: 'reactflow__edge-2a-6',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '3',
    sourceHandle: 'a',
    target: '5',
    targetHandle: null,
    id: 'reactflow__edge-3a-5',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '2',
    sourceHandle: 'a',
    target: '7',
    targetHandle: null,
    id: 'reactflow__edge-2a-7',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '3',
    sourceHandle: 'a',
    target: '4',
    targetHandle: null,
    id: 'reactflow__edge-3a-4',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '6',
    sourceHandle: 'a',
    target: '14',
    targetHandle: null,
    id: 'reactflow__edge-6a-14',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '7',
    sourceHandle: 'a',
    target: '12',
    targetHandle: null,
    id: 'reactflow__edge-7a-12',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '7',
    sourceHandle: 'a',
    target: '15',
    targetHandle: null,
    id: 'reactflow__edge-7a-15',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '5',
    sourceHandle: 'a',
    target: '11',
    targetHandle: null,
    id: 'reactflow__edge-5a-11',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '4',
    sourceHandle: 'a',
    target: '10',
    targetHandle: null,
    id: 'reactflow__edge-4a-10',
  },
  {
    animated: true,
    type: 'smoothstep',
    source: '4',
    sourceHandle: 'a',
    target: '13',
    targetHandle: null,
    id: 'reactflow__edge-4a-13',
  },
];

export const Colors = {
  colorService: {
    ET: '#036bfc',
    CK: '#795548',
    LC: '#d99918',
    QA: '#ffe57f',
  },
  colorCollector: '#036bfc',
  colorCurator: '#795548',
  colorTransformer: '#d99918',
  colorMapper: '#ffe57f',
  colorPublisher: '#f28507',
  colorConnection: '#c95b06',
};
