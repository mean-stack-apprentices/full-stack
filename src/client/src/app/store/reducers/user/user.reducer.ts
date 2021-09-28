import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';


export const userFeatureKey = 'user';

export interface State {
  users: User[];

}

export const initialState: State = {
  users: [],

};


export const reducer = createReducer(
  initialState,

);

