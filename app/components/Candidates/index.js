/**
 *
 * Candidates
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
import EditIcon from '@material-ui/icons/EditTwoTone';
import ViewIcon from '@material-ui/icons/VisibilityTwoTone';
import Fab from '@material-ui/core/Fab';
import Dialog from 'components/Dialog/Loadable';
import CandidateDetail from 'components/CandidateDetail/Loadable';

import MdPaper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const Paper = styled(MdPaper)`
  width: 100%;
  padding: 1rem;
  font-size: 0.8rem;
  min-height: calc(100vh - 150px);
  position: relative;
`;

const LoadWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  margin: 1rem 0 1.5rem;
`;

const AddNew = styled.div`
  position: absolute;
  z-index: 10;
  top: 1rem;
  right: 1rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
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
    Header: 'District',
    accessor: 'district',
    headerStyle,
  },
  {
    Header: 'State',
    accessor: 'state',
    headerStyle,
  },
  {
    Header: 'Actions',
    headerStyle,
    maxWidth: 200,
    filterable: false,
    sortable: false,
    Cell: row => (
      <Icons>
        <Link to={`/dashboard/candidates/view/${row.original.id}`}>
          <Fab aria-label="view" size="small">
            <ViewIcon />
          </Fab>
        </Link>
        <Link to={`/dashboard/candidates/edit/${row.original.id}`}>
          <Fab color="primary" aria-label="Edit" size="small">
            <EditIcon />
          </Fab>
        </Link>
        <Link to={`/dashboard/candidates/cancel/${row.original.id}`}>
          <Fab color="secondary" aria-label="Delete" size="small">
            <DeleteIcon />
          </Fab>
        </Link>
      </Icons>
    ),
  },
];

function Candidates({
  candidatesState,
  viewModal,
  candidateIndex,
  closeModalCallback,
}) {
  const tableData = [];
  const { loading, error, candidates } = candidatesState;
  if (candidates) {
    // eslint-disable-next-line array-callback-return
    candidates.map(candidate => {
      tableData.push(candidate);
    });
  }

  return (
    <Paper>
      {loading ? (
        <LoadWrapper>
          <CircularProgress />
        </LoadWrapper>
      ) : (
        <div>
          <H2>Candidates</H2>
          <AddNew>
            <Fab color="secondary" aria-label="add" size="medium">
              <AddIcon />
            </Fab>
          </AddNew>
          <ReactTable
            className="-striped -highlight"
            data={tableData}
            columns={columns}
            filterable
          />
          {viewModal && (
            <Dialog fullScreen open={viewModal} onClose={closeModalCallback}>
              <CandidateDetail candidate={candidates[candidateIndex]} />
            </Dialog>
          )}
        </div>
      )}
    </Paper>
  );
}

Candidates.propTypes = {
  viewModal: PropTypes.bool,
  candidateIndex: PropTypes.number,
  closeModalCallback: PropTypes.func,
  candidatesState: PropTypes.object,
};

export default memo(Candidates);
