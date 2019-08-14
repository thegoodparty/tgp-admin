import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PledgeIcon from '@material-ui/icons/HowToVote';
import CandidatesIcon from '@material-ui/icons/AccountBalance';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RcLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  &.red {
    color: red;
  }
`;

export const mainListItems = (
  <div>
    <ListItem button>
      <RcLink to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </RcLink>
    </ListItem>

    <ListItem button>
      <RcLink to="/dashboard/pledges">
        <ListItemIcon>
          <PledgeIcon />
        </ListItemIcon>
        <ListItemText primary="Pledges" />
      </RcLink>
    </ListItem>

    <ListItem button>
      <RcLink to="/dashboard/candidates">
        <ListItemIcon>
          <CandidatesIcon />
        </ListItemIcon>
        <ListItemText primary="Candidates" />
      </RcLink>
    </ListItem>

    <ListItem button>
      <RcLink to="/dashboard/reports">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </RcLink>
    </ListItem>
  </div>
);
