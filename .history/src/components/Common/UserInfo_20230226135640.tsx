import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
  avatar: string;
  displayName: string;
}
export default function UserInfo({ avatar, displayName }: Props) {
  return (
    <Box>
      <Avatar alt="Remy Sharp" src={avatar} />
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      ;
    </Box>
  );
}
