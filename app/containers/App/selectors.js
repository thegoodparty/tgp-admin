import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectApp = state => state.appPage || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectAppPage = () =>
  createSelector(
    selectApp,
    substate => substate,
  );

export { makeSelectLocation, makeSelectAppPage };
