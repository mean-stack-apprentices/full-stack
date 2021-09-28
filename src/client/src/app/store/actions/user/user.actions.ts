import { createAction, props } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
export const selectUserAction = createAction(
  '[User] Select Users',
  props<{ data: User }>()
);
