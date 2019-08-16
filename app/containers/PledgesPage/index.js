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
import { loadAllUsersAction } from './actions';

export function PledgesPage({ dispatch, pledgesPage }) {
  useInjectReducer({ key: 'pledgesPage', reducer });
  useInjectSaga({ key: 'pledgesPage', saga });

  useEffect(() => {
    dispatch(loadAllUsersAction());
  }, []);

  const childProps = {
    pledgesPage,
  };
  return (
    <div>
      <Helmet>
        <title>TGP Pledges</title>
        <meta name="description" content="Description of PledgesPage" />
      </Helmet>
      <Pledges {...childProps} />
    </div>
  );
}

PledgesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pledgesPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pledgesPage: makeSelectPledgesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
