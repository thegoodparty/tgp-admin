/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import bgImg from 'images/login-bg.jpg';

const styles = {
  image: {
    background: `url(${bgImg}) no-repeat center center`,
    backgroundSize: 'cover',
  },
  paper: {
    margin: '64px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '1px',
    backgroundColor: 'orange',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '1px',
  },
  submit: {
    margin: '20px 0',
  },
};

function Login() {
  return (
    <Grid container component="main" style={{ height: '100vh' }}>
      <Grid item xs={false} sm={4} md={7} style={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div style={styles.paper}>
          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form style={styles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Sign In
            </Button>
            <Box mt={5}>
              <Typography variant="body2" color="textSecondary" align="center">
                Copyright &reg; The Good Party {new Date().getFullYear()}
              </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {};

export default Login;
