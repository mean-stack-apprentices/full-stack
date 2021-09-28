import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';
import { loadUsers, loadUsersSuccess } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State {
  users: User[];
  selectedUser: User | null;

}

export const initialState: State = {
  users: [],
  selectedUser: null,

};


export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return {...state, users: action.data}
  })
);

