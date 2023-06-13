import React from 'react'
import AuthLayout from '../layout/AuthLayout'
import { Grid, TextField, Button, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <AuthLayout title='Register'>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Nombre'
                type='text'
                placeholder='Ingresa tu nombre'
                fullWidth
              />
              </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='correo@google.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Contraseña'
                type='epassword'
                placeholder='Contraseña'
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} >
                <Button variant='contained' fullWidth>
                 Crear una cuenta
                </Button>
              </Grid>             
            </Grid>

            <Grid container direction='row' justifyContent='center'>
              <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>

            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </div>
  )
}

export default Register