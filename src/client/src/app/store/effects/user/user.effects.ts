import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from '../../actions/user/user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() =>
      this.userService
        .getUsers()
        .pipe(
          map((data) => loadUsersSuccess({ data })),
          catchError(() => EMPTY)
          )
    )
  ));

  constructor(private actions$: Actions, private userService: UserService) {}
}
