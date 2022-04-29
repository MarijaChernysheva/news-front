import * as React from 'react';
import { string } from 'prop-types';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function BasicAlerts({ severity, text }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity={severity}>
        { text }
      </Alert>
    </Stack>
  );
}

BasicAlerts.propTypes = {
  severity: string.isRequired,
  text: string.isRequired,
};

export default BasicAlerts;
