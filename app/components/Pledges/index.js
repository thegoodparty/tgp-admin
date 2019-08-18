/**
 *
 * Pledges
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdPaper from '@material-ui/core/Paper';
import 'react-table/react-table.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import VoteIcon from '@material-ui/icons/HowToVote';
import BarIcon from '@material-ui/icons/BarChart';
import CircularProgress from '@material-ui/core/CircularProgress';
import AllUsers from './AllUsers';
import Thresholds from './Thresholds';
import CDwithCount from './CDwithCount';
import SenateWithCount from './SenateWithCount';

const Paper = styled(MdPaper)`
  width: 100%;
  padding: 1rem;
  font-size: 0.8rem;
`;
const LoadWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TABS_ENUM = {
  ALL_USERS: 0,
  THRESHOLD: 1,
  CD_USERS: 2,
  SENATE_USERS: 3,
};

function Pledges({
  pledgesPage,
  loadThresholdsCallback,
  loadCdWithUsersCallback,
  loadSenateWithUsersCallback,
}) {
  const {
    users,
    loading,
    cdThresholds,
    senateThresholds,
    cdWithUsers,
    senateWithUsers,
  } = pledgesPage;

  const [tabValue, setTabValue] = React.useState(0);
  function handleTabChange(event, newValue) {
    setTabValue(newValue);
    if (!cdThresholds) {
      loadThresholdsCallback();
    }
    if (!cdWithUsers) {
      loadCdWithUsersCallback();
    }
    if (!senateWithUsers) {
      loadSenateWithUsersCallback();
    }
  }

  return (
    <Paper>
      {loading ? (
        <LoadWrapper>
          <CircularProgress />
        </LoadWrapper>
      ) : (
        <>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab icon={<PersonIcon />} label="All Users" />
            <Tab icon={<VoteIcon />} label="Thresholds" />
            <Tab icon={<BarIcon />} label="Congressional Districts" />
            <Tab icon={<BarIcon />} label="Senate Districts" />
          </Tabs>
          {tabValue === TABS_ENUM.ALL_USERS && <AllUsers users={users} />}
          {tabValue === TABS_ENUM.THRESHOLD && (
            <Thresholds
              cdThresholds={cdThresholds}
              senateThresholds={senateThresholds}
            />
          )}
          {tabValue === TABS_ENUM.CD_USERS && <CDwithCount cd={cdWithUsers} />}
          {tabValue === TABS_ENUM.SENATE_USERS && (
            <SenateWithCount senates={senateWithUsers} />
          )}
        </>
      )}
    </Paper>
  );
}

Pledges.propTypes = {
  pledgesPage: PropTypes.object,
  loadThresholdsCallback: PropTypes.func,
  loadCdWithUsersCallback: PropTypes.func,
  loadSenateWithUsersCallback: PropTypes.func,
};

export default memo(Pledges);
