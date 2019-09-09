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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PledgesPage from 'containers/PledgesPage/Loadable';
import CandidatesPage from 'containers/CandidatesPage/Loadable';

import Header from '../Header';
import LeftPanel from '../LeftPanel';
import Map from './Map';
import WeeklyTrendChart from './WeeklyTrendChart';

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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

function Dashboard({
  loading,
  error,
  signoutCallback,
  cdWithMap,
  location,
  cdTrend,
  senateTrend,
}) {
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
      return <CandidatesPage />;
    }

    if (location.startsWith('/dashboard/candidates/view/')) {
      const candidateIndex = parseInt(
        location.replace('/dashboard/candidates/view/', ''),
        10,
      );
      return <CandidatesPage viewModal candidateIndex={candidateIndex} />;
    }
    if (location === '/dashboard/dashboard') {
      return <CandidatesPage />;
    }

    return (
      <div>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <WeeklyTrendChart
                chartData={cdTrend}
                title="Congressional District Trend (last 7 days)"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <WeeklyTrendChart
                chartData={senateTrend}
                title="Senate District Trend (last 7 days)"
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Map cdWithMap={cdWithMap} />
          </Grid>
        </Grid>
      </div>
    );
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
  cdWithMap: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  cdTrend: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  senateTrend: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Dashboard;
