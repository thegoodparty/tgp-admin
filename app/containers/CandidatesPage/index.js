/**
 *
 * CandidatesPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Candidates from 'components/candidates/Candidates';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCandidatesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { addCandidateAction, loadAllCandidatesAction } from './actions';

const candState = {
  loading: false,
  error: false,
  candidates: [
    {
      id: '0',
      firstName: 'Gavin',
      lastName: 'Christopher',
      email: 'abc@rfd.com',
      phone: '(310) 971-2789',
      district: 'AZ-09',
      state: 'AZ',
      profileImage: 'https://i.pravatar.cc/600',
      facebookUrl: 'https://www.facebook.com/thegoodpartyorg/',
      twitterUrl: 'https://twitter.com/thegoodpartyorg',
      instagramUrl: 'https://www.instagram.com/thegoodpartyorg/',
      about:
        'Gavin Christopher Newsom is an American politician and businessman who is the 40th governor of California, serving since January 2019. A member of the Democratic Party, he previously served as the 49th lieutenant governor of California from 2011 to 2019 and as the 42nd mayor of San Francisco from 2004 to 2011.',
      website: 'https://thegoodparty.org/',
      caresAbout: [
        'Global Warming',
        'Women Rights',
        'Anti Corruption',
        'Same-sex marriage',
        'Cannabis legalization',
      ],
    },
  ],
};

export function CandidatesPage({
  dispatch,
  viewModal,
  newModal,
  candidateIndex,
  closeModalCallback,
  newCandidateCallback,
  candidatesState,
}) {
  useInjectReducer({ key: 'candidatesPage', reducer });
  useInjectSaga({ key: 'candidatesPage', saga });

  useEffect(() => {
    dispatch(loadAllCandidatesAction());
  }, []);

  const childProps = {
    viewModal,
    newModal,
    candidateIndex,
    closeModalCallback,
    newCandidateCallback,
    candidatesState,
  };

  console.log(candidatesState);

  return (
    <div>
      <Helmet>
        <title>TGP | Candidates</title>
        <meta name="description" content="Description of Candidates" />
      </Helmet>
      <Candidates {...childProps} />
    </div>
  );
}

CandidatesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  viewModal: PropTypes.bool,
  newModal: PropTypes.bool,
  candidateIndex: PropTypes.number,
  closeModalCallback: PropTypes.func,
  newCandidateCallback: PropTypes.func,
  candidatesState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  candidatesState: makeSelectCandidatesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    closeModalCallback: () => {
      dispatch(push('/dashboard/candidates'));
    },
    newCandidateCallback: candidate => {
      console.log(candidate);
      dispatch(addCandidateAction(candidate));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CandidatesPage);
