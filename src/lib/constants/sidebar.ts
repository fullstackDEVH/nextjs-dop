interface ISubitem {
  sub_name: string;
  sub_link: string;
}

interface ISidebar {
  name: string;
  sub_item?: ISubitem[];
  link: string;
}

const SIDE_BAR: ISidebar[] = [
  {
    name: 'TASK',
    link: '/task',
    sub_item: [
      {
        sub_name: 'Open Task',
        sub_link: '/open-task',
      },
      {
        sub_name: 'My PFM',
        sub_link: '/pfm',
      },
      {
        sub_name: 'My Task',
        sub_link: '/pfm',
      },
    ],
  },
  {
    name: 'ACCOUNT',
    link: '/account',
    sub_item: [],
  },
];
export default SIDE_BAR;
