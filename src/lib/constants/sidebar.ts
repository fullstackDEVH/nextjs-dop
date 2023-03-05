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
    name: 'Dashboard',
    link: '/',
    sub_item: [
      {
        sub_name: 'My Projects',
        sub_link: '/project',
      },
      {
        sub_name: 'My Tasks',
        sub_link: '/tasks',
      },
    ],
  },
  {
    name: 'Account',
    link: '/me',
    sub_item: [],
  },
];
export default SIDE_BAR;
