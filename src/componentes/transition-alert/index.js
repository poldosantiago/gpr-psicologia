import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
// import CloseIcon from '@mui/icons-material/Close';
import { useAlertaContext } from 'contextos/alerta';

export default function TransitionAlerts({mensagem="mensagem padrão!", tipo="success"}) {
  const { alerta } = useAlertaContext();

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={alerta}>
        <Alert
          severity={tipo}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
            >
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {mensagem}
        </Alert>
      </Collapse>
    </Box>
  );
}