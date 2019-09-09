import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the candidatesPage state domain
 */

const selectCandidatesPageDomain = state =>
  state.candidatesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CandidatesPage
 */

const makeSelectCandidatesPage = () =>
  createSelector(
    selectCandidatesPageDomain,
    substate => substate,
  );

export default makeSelectCandidatesPage;
export { selectCandidatesPageDomain };
