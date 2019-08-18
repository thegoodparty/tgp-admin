/**
 *
 * Pledges
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdPaper from '@material-ui/core/Paper';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const headerStyle = {
  fontWeight: 700,
  fontSize: '1.05em',
};

const columns = [
  {
    Header: 'District',
    accessor: 'district',
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
];

function Thresholds({ cdThresholds, senateThresholds }) {
  const cdTableData = [];
  if (cdThresholds) {
    // eslint-disable-next-line array-callback-return
    Object.keys(cdThresholds).map(threshold => {
      cdTableData.push({
        district: threshold,
        writeInThreshold: cdThresholds[threshold].writeInThreshold,
        writeInThresholdWithPresident:
          cdThresholds[threshold].writeInThresholdWithPresident,
      });
    });
  }

  const senateTableData = [];
  if (senateThresholds) {
    // eslint-disable-next-line array-callback-return
    Object.keys(senateThresholds).map(threshold => {
      senateTableData.push({
        district: threshold,
        writeInThreshold: senateThresholds[threshold].writeInThreshold,
        writeInThresholdWithPresident:
          senateThresholds[threshold].writeInThresholdWithPresident,
      });
    });
  }
  return (
    <div>
      <h2>Congressional District Thresholds</h2>
      <ReactTable
        className="-striped -highlight"
        data={cdTableData}
        columns={columns}
        filterable
      />
      <br />
      <h2>Senate District Thresholds</h2>
      <ReactTable
        className="-striped -highlight"
        data={senateTableData}
        columns={columns}
        filterable
      />
    </div>
  );
}

Thresholds.propTypes = {
  cdThresholds: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  senateThresholds: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default memo(Thresholds);
