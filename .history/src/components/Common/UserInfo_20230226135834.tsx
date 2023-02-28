import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
  avatar: string;
  displayName: string;
}
export default function UserInfo({ avatar, displayName }: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 30, height: 30 }} />
      <Typography variant="subtitle2" gutterBottom>
        {displayName}
      </Typography>
    </Box>
  );
}
