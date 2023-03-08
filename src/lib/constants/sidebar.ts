<<<<<<< HEAD:src/lib/constants/sidebar.ts
<<<<<<< HEAD:src/lib/constants/sidebar.ts
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
=======
=======
>>>>>>> 5ce9085 (feat: design profile user):src/constants/sidebar.ts
import { AccountCircle as AccountCircleIcon , Email, Lock } from '@mui/icons-material';
import { BarChart as BarChartIcon } from '@mui/icons-material';
import { Icon } from '@mui/material';

interface ISubitem {
    sub_name : string;
}

interface ISideba {
    name : string;
    sub_item : ISubitem[],
    // icon : InstanceType<typeof Icon>;
}

export const sidebar : ISideba[]= [
    {
        name : "TASK",
        sub_item : [
            {
                sub_name: "Open Task"
            },
            {
                sub_name: "My PFM"
            },
            {
                sub_name: "My Task"
            }
        ],
        // icon : <BarChartIcon />
    },
    {
        name : "ACCOUNT",
        sub_item : [
            {
                sub_name : "Change Passwork"
            },
            {
                sub_name : "Edit Account"
            },
            {
                sub_name : "Change Avatar"
            },
        ],
        // icon : <BarChartIcon />
    },
<<<<<<< HEAD:src/lib/constants/sidebar.ts
]
>>>>>>> 1ab1764 (change):src/constants/sidebar.ts
=======
]
>>>>>>> 5ce9085 (feat: design profile user):src/constants/sidebar.ts
