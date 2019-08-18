/**
 *
 * Pledges
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const PercWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const PercFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: green;
`;
const PercValue = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const headerStyle = {
  fontWeight: 700,
  fontSize: '1.05em',
};

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    headerStyle,
  },
  {
    Header: 'Pledges Count',
    accessor: 'userCount',
    headerStyle,
  },
  {
    Header: 'Write In Threshold',
    accessor: 'writeInThreshold',
    headerStyle,
  },
  {
    Header: 'Write In Threshold With Presidential',
    accessor: 'writeInThresholdWithPresident',
    headerStyle,
  },
  {
    Header: '% of pledges needed',
    headerStyle,
    maxWidth: 200,
    Cell: row => (
      <PercWrapper>
        <PercFill style={{ width: `${row.original.perc}%` }} />
        <PercValue>{row.original.perc.toFixed(2)}</PercValue>
      </PercWrapper>
    ),
  },
  {
    Header: '% of pledges needed with President',
    headerStyle,
    maxWidth: 200,
    Cell: row => (
      <PercWrapper>
        <PercFill style={{ width: `${row.original.percWithPresident}%` }} />
        <PercValue>{row.original.percWithPresident.toFixed(2)}</PercValue>
      </PercWrapper>
    ),
  },
];

function SenateWithCount({ senates }) {
  const tableData = [];
  console.log('here', senates);
  if (senates) {
    // eslint-disable-next-line array-callback-return
    senates.map(senate => {
      tableData.push({
        ...senate,
        perc:
          senate.userCount !== 0
            ? (senate.userCount * 100) / senate.writeInThreshold
            : 0,
        percWithPresident:
          senate.userCount !== 0
            ? (senate.userCount * 100) /
              senate.writeInThresholdWithPresident
            : 0,
      });
    });
  }
  return (
    <ReactTable
      className="-striped -highlight"
      data={tableData}
      columns={columns}
      filterable
    />
  );
}

SenateWithCount.propTypes = {
  senates: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(SenateWithCount);
