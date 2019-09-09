/**
 *
 * PledgesPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Pledges from 'components/Pledges';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPledgesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  loadAllUsersAction,
  loadCdWithUsersAction,
  loadSenateWithUsersAction,
  loadThresholdsAction,
} from './actions';

export function PledgesPage({
  dispatch,
  pledgesPage,
  loadThresholdsCallback,
  loadCdWithUsersCallback,
  loadSenateWithUsersCallback,
}) {
  useInjectReducer({ key: 'pledgesPage', reducer });
  useInjectSaga({ key: 'pledgesPage', saga });

  useEffect(() => {
    dispatch(loadAllUsersAction());
  }, []);

  const childProps = {
    pledgesPage,
    loadThresholdsCallback,
    loadCdWithUsersCallback,
    loadSenateWithUsersCallback,
  };
  return (
    <div>
      <Helmet>
        <title>TGP | Pledges</title>
        <meta name="description" content="Description of PledgesPage" />
      </Helmet>
      <Pledges {...childProps} />
    </div>
  );
}

PledgesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pledgesPage: PropTypes.object,
  loadThresholdsCallback: PropTypes.func,
  loadCdWithUsersCallback: PropTypes.func,
  loadSenateWithUsersCallback: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pledgesPage: makeSelectPledgesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadThresholdsCallback: () => {
      dispatch(loadThresholdsAction());
    },
    loadCdWithUsersCallback: () => {
      dispatch(loadCdWithUsersAction());
    },
    loadSenateWithUsersCallback: () => {
      dispatch(loadSenateWithUsersAction());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PledgesPage);
