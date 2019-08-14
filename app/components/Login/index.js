/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

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
  red: {
    color: 'red',
  },
};

function Login({
  loginUserCallback,
  resetUserCallback,
  verifyPhoneCallback,
  loading,
  error,
  user,
}) {
  const [phone, setPhone] = useState(false);
  const [code, setCode] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleCodeChange = e => {
    setCode(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validPhone = /^\d{10}$/.test(phone);
    if (validPhone) {
      setPhoneError(false);

      if (user) {
        verifyPhoneCallback(phone, code);
      } else {
        loginUserCallback(phone);
      }
    } else {
      setPhoneError(true);
    }
  };

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
          <form style={styles.form} noValidate onSubmit={handleSubmit}>
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
              disabled={user !== false}
              onChange={handlePhoneChange}
            />
            {phoneError && (
              <div style={styles.red}>Please enter a valid phone</div>
            )}
            {user && (
              <>
                <div>Please enter the confirmation code sent to your phone</div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="Code"
                  name="code"
                  onChange={handleCodeChange}
                />
              </>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
              disabled={loading}
            >
              {user ? 'Verify Phone' : 'Sign In'}
            </Button>
            {error && <div style={styles.red}>{error}</div>}
            {user && (
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                style={styles.submit}
                disabled={loading}
                onClick={resetUserCallback}
              >
                Change Phone Number
              </Button>
            )}

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

Login.propTypes = {
  loginUserCallback: PropTypes.func.isRequired,
  resetUserCallback: PropTypes.func.isRequired,
  verifyPhoneCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Login;
