/**
 *
 * LoginPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Login from 'components/Login';
import {
  loadUser,
  loginAction,
  resetUser,
  verifyPhoneAction,
} from '../App/actions';
import { makeSelectAppPage } from '../App/selectors';

export function LoginPage({
  dispatch,
  loginUserCallback,
  resetUserCallback,
  verifyPhoneCallback,
  appPage,
}) {
  useEffect(() => {
    dispatch(loadUser(false));
  }, []);

  const childProps = {
    loginUserCallback,
    resetUserCallback,
    verifyPhoneCallback,
    ...appPage,
  };

  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Login {...childProps} />
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loginUserCallback: PropTypes.func.isRequired,
  resetUserCallback: PropTypes.func.isRequired,
  verifyPhoneCallback: PropTypes.func.isRequired,
  appPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appPage: makeSelectAppPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loginUserCallback: phone => {
      dispatch(loginAction(phone));
    },
    resetUserCallback: () => {
      dispatch(resetUser());
    },
    verifyPhoneCallback: (phone, code) => {
      dispatch(verifyPhoneAction(phone, code));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
