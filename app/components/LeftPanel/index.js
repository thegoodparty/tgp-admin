/**
 *
 * LeftPanel
 *
 */

import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SignoutIcon from '@material-ui/icons/Cancel';
import styled from 'styled-components';
import { drawerWidth } from 'config/constantsConfig';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PledgeIcon from '@material-ui/icons/HowToVote';
import CandidatesIcon from '@material-ui/icons/AccountBalance';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom';

const RcLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  &.red {
    color: red;
  }
`;
const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  bottomLink: {
    position: 'absolute',
    bottom: 0,
    width: drawerWidth,
  },
}));

function LeftPanel({ open, handleDrawerClose, signoutCallback, location }) {
  const classes = useStyles();
  console.log(location)
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button selected={location === '/dashboard/dashboard'}>
          <RcLink to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </RcLink>
        </ListItem>

        <ListItem button selected={location === '/dashboard/pledges'}>
          <RcLink to="/dashboard/pledges">
            <ListItemIcon>
              <PledgeIcon />
            </ListItemIcon>
            <ListItemText primary="Pledges" />
          </RcLink>
        </ListItem>

        <ListItem button selected={location === '/dashboard/candidates'}>
          <RcLink to="/dashboard/candidates">
            <ListItemIcon>
              <CandidatesIcon />
            </ListItemIcon>
            <ListItemText primary="Candidates" />
          </RcLink>
        </ListItem>

        <ListItem button selected={location === '/dashboard/reports'}>
          <RcLink to="/dashboard/reports">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </RcLink>
        </ListItem>
      </List>
      <div className={classes.bottomLink}>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SignoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign out" onClick={signoutCallback} />
        </ListItem>
      </div>
    </Drawer>
  );
}

LeftPanel.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
  signoutCallback: PropTypes.func,
  location: PropTypes.string,
};

export default memo(LeftPanel);
