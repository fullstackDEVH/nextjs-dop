import React, { useState } from 'react';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
interface Props {
  isLoading: boolean;
}

const Loading = ({ isLoading }: Props) => {
  return (
    <div>
      <Box
        sx={{
          display: `${isLoading ? 'flex' : 'none'}`,
          position: 'fixed',
          top: '50%',
          left: '50%',
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Loading;
