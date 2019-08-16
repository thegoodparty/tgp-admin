/**
 *
 * DashboardPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Dashboard from 'components/Dashboard';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadUser, resetUser } from '../App/actions';
import { cleanCookies } from '../../helpers/cookieHelper';

export function DashboardPage({ dispatch, signoutCallback, location }) {
  useInjectReducer({ key: 'dashboardPage', reducer });
  useInjectSaga({ key: 'dashboardPage', saga });

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const childProps = {
    signoutCallback,
    location,
  };

  return (
    <div>
      <Helmet>
        <title>The Good Party Dashboard</title>
        <meta name="description" content="Dashboard Page" />
      </Helmet>
      <Dashboard {...childProps} />
    </div>
  );
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  signoutCallback: PropTypes.func.isRequired,
  location: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    location: ownProps.location.pathname,
    signoutCallback: () => {
      cleanCookies();
      dispatch(resetUser());
      dispatch(push('/'));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DashboardPage);
