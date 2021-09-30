import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';
import { createUserSuccess, deleteUserSuccess, loadUsers, loadUsersSuccess, selectUserAction, updateUserSuccess } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State extends EntityState<User> {
  selectedUser: User | null;
}

export function selectUserId(a: User): string {
  //In this case this would be optional since primary key is id
  return `${a._id}`;
}

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId,
  // sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUser: null,
});

export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return adapter.setAll(action.data, state);
  }),
  on(updateUserSuccess, (state, action) => {
    return adapter.updateOne(action.data, state)
  }),
  on(deleteUserSuccess, (state, action) => {
    return adapter.removeOne(`${action.data._id}`, state)
  }),
  on(createUserSuccess, (state, action) => {
    return adapter.addOne(action.data, state);
  }),
  on(selectUserAction, (state, action) => {
    return { ...state, selectedUser: action.data }
  }),
);

