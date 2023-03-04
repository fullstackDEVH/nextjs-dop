import React, { useState } from 'react';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'fixed',
        width: '1000px',
        minHeight: '620px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Loading;
