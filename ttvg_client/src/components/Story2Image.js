import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Story2Image()
{
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: 300,
          border: 1,
          borderColor: 'grey.500',
          padding: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 200,
            border: 1,
            borderColor: 'grey.500',
          }}
        >
          <p>This is the left part</p>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 200,
            border: 1,
            borderColor: 'grey.500',
          }}
        >
          <p>This is the right part</p>
        </Box>
      </Box>
    );
}
