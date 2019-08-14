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
// import SignoutIcon from 'react-icons/lib/fa/sign-out';
// import styled from 'styled-components';
import { drawerWidth } from 'config/constantsConfig';

import { mainListItems } from 'components/LeftPanel/listItems';

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

function LeftPanel({ open, handleDrawerClose, signoutCallback }) {
  const classes = useStyles();
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
      <List>{mainListItems}</List>
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
};

export default memo(LeftPanel);
