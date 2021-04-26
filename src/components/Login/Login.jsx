import React from 'react';
import {
    Avatar,
    Button, 
    CssBaseline, 
    FormControlLabel, 
    Checkbox, 
    Link, 
    Grid,
    Typography,
    Container,
    Box
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import TextFieldCustom from './TextFieldCustom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        Brayan Anderson
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const  methods  = useForm();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <FormProvider { ...methods}>
            <form className={classes.form} noValidate>
                <TextFieldCustom id="usename" autoComplete="email" name="name" label="Nome de usuário" type="text"/>
                <TextFieldCustom id="senha" autoComplete="current-password" type="password" name="password" label="Senha"/>
                
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Manter conectado"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                Entrar
                </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem conta? Inscreva-se"}
              </Link>
            </Grid>
          </Grid>
        </form> 
        </FormProvider>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
