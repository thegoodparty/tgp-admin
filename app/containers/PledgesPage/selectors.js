import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pledgesPage state domain
 */

const selectPledgesPageDomain = state => state.pledgesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PledgesPage
 */

const makeSelectPledgesPage = () =>
  createSelector(
    selectPledgesPageDomain,
    substate => substate,
  );

export default makeSelectPledgesPage;
export { selectPledgesPageDomain };
