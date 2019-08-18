/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import PledgesPage from 'containers/PledgesPage/Loadable';

import Header from '../Header';
import LeftPanel from '../LeftPanel';
import Map from './Map';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: 'auto',
  },
  loadingModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#FFF',
    fontSize: '2rem',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Dashboard({ loading, error, signoutCallback, location }) {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderChild = () => {
    if (location === '/dashboard/reports') {
      return <div>Reports</div>;
    }
    if (location === '/dashboard/pledges') {
      return <PledgesPage />;
    }
    if (location === '/dashboard/candidates') {
      return <div>Candidates</div>;
    }

    return <Map />;
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loading && (
        <div className={classes.loadingModal}>
          Loading <br /> <br /> <CircularProgress />
        </div>
      )}
      {error && (
        <div className={classes.loadingModal}>
          Error, Please refresh your page
        </div>
      )}
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <LeftPanel
        open={open}
        handleDrawerClose={handleDrawerClose}
        signoutCallback={signoutCallback}
        location={location}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          {renderChild()}
        </Container>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  signoutCallback: PropTypes.func,
  location: PropTypes.string,
};

export default Dashboard;
