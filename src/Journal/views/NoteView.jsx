import { Button, Grid, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGalery } from '../../components';

export const NoteView = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      sx={{ mb: 1, mt: 9, ml: 4 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='Light'>
          20 de Junio del 2022
        </Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese Titulo'
          label='Titulo'
          sx={{
            border: 'none',
            mb: 1,
          }}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Que sucedio el dia de hoy?'
          label='Cuerpo'
          minRows={5}
          sx={{
            border: 'none',
            mb: 1,
          }}
        />
      </Grid>
      {/* Galería de imagenes */}
      <ImageGalery />
    </Grid>
  );
};
