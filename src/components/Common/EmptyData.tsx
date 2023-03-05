import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Image from 'next/image';
export default function EmptyData() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 200px)',
      }}
    >
      <Image src="/empty_box.png" alt="empty" width={200} height={200}></Image>
      <Typography fontWeight="500" variant="h4">
        No data to display
      </Typography>
    </Box>
  );
}
