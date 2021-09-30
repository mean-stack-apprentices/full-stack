import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as fromUser from '../../reducers/user/user.reducer';

const userFeatureSelector = createFeatureSelector<AppState, fromUser.State>(fromUser.userFeatureKey);


// get the selectors
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromUser.adapter.getSelectors();

export const usersSelector = createSelector(
  userFeatureSelector,
  selectAll
);

export const selectedUserSelector = createSelector(
  userFeatureSelector,
  (state) => state.selectedUser
)



