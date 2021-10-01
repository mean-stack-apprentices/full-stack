import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';
import { createUserSuccess, deleteUserSuccess, loadUsers, loadUsersSuccess, selectUserAction, updateUserSuccess } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';


export interface State extends EntityState<User> {
  // additional entity state properties
  selectedUser: User | null;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = userAdapter.getInitialState({
  // additional entity state properties
  selectedUser: null,
});


export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return userAdapter.setAll(action.data, state)
  }),
  on(selectUserAction, (state, action) => {
    return { ...state, selectedUser: action.data }
  }),
  on(updateUserSuccess, (state, action) => {
    return userAdapter.updateOne(action.data, state)
  }),
  on(deleteUserSuccess, (state, action) => {
    return userAdapter.removeOne(`${action.data._id}`, state)
  }),
  on(createUserSuccess, (state, action) => {
    return userAdapter.addOne(action.data, state)
  })
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = userAdapter.getSelectors();

export const selectAllUsers = selectAll;

