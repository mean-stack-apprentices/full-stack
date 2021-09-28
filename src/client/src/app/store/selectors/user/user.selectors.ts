import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as formUser from "../../reducers/user/user.reducer"


const userFeatureSelector = createFeatureSelector<formUser.State>(formUser.userFeatureKey)

export const usersSelector = createSelector(
userFeatureSelector,
(state) => state.users
)
export const selectedUsersSelector = createSelector(
  userFeatureSelector,
  (state) => state.selectedUser
  )

