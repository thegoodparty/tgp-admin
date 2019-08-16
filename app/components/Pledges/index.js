/**
 *
 * Pledges
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdPaper from '@material-ui/core/Paper';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Paper = styled(MdPaper)`
  width: 100%;
  padding: 1rem;
  font-size: 0.8rem;
`;

const headerStyle = {
  fontWeight: 700,
  fontSize: '1.05em',
};

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    headerStyle,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    headerStyle,
  },
  {
    Header: 'Email',
    accessor: 'email',
    headerStyle,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    headerStyle,
  },
  {
    Header: 'Address',
    accessor: 'address',
    headerStyle,
  },
  {
    Header: 'City',
    accessor: 'city',
    headerStyle,
  },
  {
    Header: 'State',
    accessor: 'state',
    headerStyle,
  },
  {
    Header: 'Zip',
    accessor: 'zip',
    headerStyle,
  },
];

function Pledges({ pledgesPage }) {
  const { users } = pledgesPage;
  const tableData = [];
  if (users) {
    // eslint-disable-next-line array-callback-return
    users.map(user => {
      let normalizedAddress;
      if (user.normalizedAddress && user.normalizedAddress !== '') {
        normalizedAddress = JSON.parse(user.normalizedAddress);
      }
      tableData.push({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: normalizedAddress ? normalizedAddress.city : '',
        state: normalizedAddress ? normalizedAddress.state : '',
        zip: normalizedAddress ? normalizedAddress.zip : '',
      });
    });
  }
  return (
    <Paper>
      <ReactTable
        className="-striped -highlight"
        data={tableData}
        columns={columns}
        filterable
      />
    </Paper>
  );
}

Pledges.propTypes = {
  pledgesPage: PropTypes.object,
};

export default memo(Pledges);
