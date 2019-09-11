/**
 *
 * CandidateDetail
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import Grid from '@material-ui/core/Grid';

import { C } from 'config/constantsConfig';

const Wrapper = styled.div`
  padding: 0 0.3rem 0.3rem;
  @media only screen and (min-width: 768px) {
    padding: 0 1rem 1rem;
  }
`;
const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 2rem;
`;
const A = styled.a`
  tex-decoration: none;
  margin-right: 0.5rem;
  color: ${C.colors.blue};
`;

function CandidateDetail({ candidate }) {
  return (
    <>
      {candidate && (
        <Grid container component="main">
          <Grid item xs={12}>
            <Wrapper>
              <Typography variant="h2" gutterBottom>
                {candidate.firstName} {candidate.lastName}
              </Typography>
            </Wrapper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Wrapper>
              <Img src={candidate.profileImage} className="full-image" />
              <Typography variant="h5" gutterBottom>
                Contact Info
              </Typography>
              <Typography variant="body1" gutterBottom>
                <A href={`mailto:${candidate.email}`}>{candidate.email}</A>
                <br />
                <A href={`tel:${candidate.phone}`}>{candidate.phone}</A>
              </Typography>
              <br />
              <br />
              <Typography variant="h5" gutterBottom gutterTop>
                Social Accounts
              </Typography>
              <Typography variant="body1" gutterBottom>
                <A href={candidate.facebookUrl} target="_blank">
                  <FacebookIcon />
                </A>
                <A href={candidate.twitterUrl} target="_blank">
                  <TwitterIcon />
                </A>
                <A href={candidate.instagramUrl} target="_blank">
                  <InstagramIcon />
                </A>
                <A href={candidate.website} target="_blank">
                  <LanguageIcon />
                </A>
              </Typography>
            </Wrapper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Wrapper>
              <Typography variant="h4" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                {candidate.about}
              </Typography>
              <br />
              <br />
              {candidate.caresAbout && (
                <>
                  <Typography variant="h4" gutterBottom>
                    Cares About
                  </Typography>
                  <ul>
                    {candidate.caresAbout.map((care, index) => (
                      <Typography
                        variant="body1"
                        gutterBottom
                        key={`care-${index}`}
                      >
                        <li>{care}</li>
                      </Typography>
                    ))}
                  </ul>
                </>
              )}
            </Wrapper>
          </Grid>
        </Grid>
      )}
    </>
  );
}

CandidateDetail.propTypes = {
  candidate: PropTypes.object,
};

export default memo(CandidateDetail);
