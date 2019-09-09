/**
 *
 * Dialog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdDialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import MdAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/CloseTwoTone';

const AppBar = styled(MdAppBar)`
  position: relative;
`;

const ContentWrapper = styled.div`
  margin-top: 64px;
  padding: 2rem;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dialog({ open, onClose, children }) {
  return (
    <MdDialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ContentWrapper>{children}</ContentWrapper>
    </MdDialog>
  );
}

Dialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.object,
};

export default Dialog;
