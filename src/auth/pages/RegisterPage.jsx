import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ my: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Ingrese el nombre completo'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='Ingrese el correo'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Ingrese la contraseña'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Confirmar contraseña'
              type='password'
              placeholder='Confirme la contraseña'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Registrar
              </Button>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid> */}
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
