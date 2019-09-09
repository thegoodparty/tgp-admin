/**
 *
 * NewCandidate
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/SaveTwoTone';

import states from './states';
import ImageUploader from './ImageUploader';

const InputWrapper = styled.div`
  padding: 0.5rem;
`;
const InputWrapper50 = styled.div`
  display: inline-block;
  width: 50%;
  padding: 0.5rem;
`;

function NewCandidate({ newCandidateCallback }) {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    state: '',
    district: '',
    about: '',
    facebookUrl: '',
    twitterUrl: '',
    instagramUrl: '',
    website: '',
  });

  const [image, setImage] = useState();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleImageUpload = img => {
    setImage(img);
  };

  const handleSave = () => {
    newCandidateCallback({ ...values, image });
  };

  const canSave = () => {
    const { firstName, lastName, phone, email, state, about } = values;
    return (
      firstName !== '' &&
      lastName !== '' &&
      phone !== '' &&
      email !== '' &&
      state !== '' &&
      about !== '' &&
      typeof image !== 'undefined'
    );
  };

  return (
    <form noValidate autoComplete="off">
      <Grid container component="main">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Personal Info
          </Typography>
          <InputWrapper50>
            <TextField
              fullWidth
              required
              label="First Name"
              value={values.firstName}
              onChange={handleChange('firstName')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper50>
          <InputWrapper50>
            <TextField
              fullWidth
              required
              label="Last Name"
              value={values.lastName}
              onChange={handleChange('lastName')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper50>
          <InputWrapper50>
            <TextField
              fullWidth
              required
              label="Email"
              value={values.email}
              onChange={handleChange('email')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper50>
          <InputWrapper50>
            <TextField
              fullWidth
              required
              label="Phone"
              value={values.phone}
              onChange={handleChange('phone')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper50>

          <hr />
          <Typography variant="h6" gutterBottom>
            Upload Profile Photo (Required)
          </Typography>
          <ImageUploader saveCallback={handleImageUpload} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Public Info
          </Typography>
          <InputWrapper>
            <TextField
              label="About"
              multiline
              required
              rows="6"
              fullWidth
              onChange={handleChange('about')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper>
          <InputWrapper50>
            <TextField
              select
              required
              fullWidth
              label="State"
              value={values.state}
              onChange={handleChange('state')}
              margin="normal"
              variant="outlined"
              SelectProps={{
                native: true,
              }}
            >
              {states.map(state => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </TextField>
          </InputWrapper50>
          <InputWrapper50>
            <TextField
              fullWidth
              label="District"
              value={values.district}
              onChange={handleChange('district')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper50>
          <InputWrapper>
            <TextField
              fullWidth
              label="Facebook"
              value={values.facebookUrl}
              onChange={handleChange('facebookUrl')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              label="Twitter"
              value={values.twitterUrl}
              onChange={handleChange('twitterUrl')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              label="Instagram"
              value={values.instagramUrl}
              onChange={handleChange('instagramUrl')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              fullWidth
              label="Website"
              value={values.website}
              onChange={handleChange('website')}
              margin="normal"
              variant="outlined"
            />
          </InputWrapper>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            disabled={!canSave()}
            onClick={handleSave}
          >
            <SaveIcon /> &nbsp; Save New Candidate
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

NewCandidate.propTypes = {
  newCandidateCallback: PropTypes.func,
};

export default NewCandidate;
