import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadUsers, loadUsersFailure } from '../../actions/user/user.actions';
import { loadUsersSuccess } from 'src/app/store/actions/user/user.actions';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';



@Injectable()
export class UserEffects {
loadUsers$ = createEffect(() => this.actions$.pipe(
  ofType(loadUsers),
  mergeMap( () => this.userService.getUsers()
  .pipe( map((data) => loadUsersSuccess({data})),
  catchError(error => {
    return of(loadUsersFailure((error)))
  })
  )
  )
)
)

  constructor(private actions$: Actions,
    private userService: UserService) {}

}
