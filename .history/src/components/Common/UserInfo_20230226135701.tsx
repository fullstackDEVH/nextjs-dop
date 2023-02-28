import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
  avatar: string;
  displayName: string;
}
export default function UserInfo({ avatar, displayName }: Props) {
  return (
    <Box>
      <Avatar alt="Remy Sharp" src={avatar} />
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      ;
    </Box>
  );
}
