import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "../../service/auth/auth.service";
import {
  CurrentUserData,
  CurrentUserDataError,
  CurrentUserDataSuccess,
  EAuthActions,
  Login,
  LoginError
} from '../actions/auth'
import {catchError, map, switchMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {of} from "rxjs";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    public router: Router
  ) {
  }

  @Effect()
  logIn$ = this.actions$.pipe(
    ofType<Login>(EAuthActions.LOGIN),
    switchMap(action =>
      this.authService.login(action.payload["login"], action.payload["password"]).pipe(
        map((token: string) => new CurrentUserData(token)),
        catchError(err => of(new LoginError(err))),
      )
    ));

  @Effect()
  currentUserData$ = this.actions$.pipe(
    ofType<CurrentUserData>(EAuthActions.CURRENT_USER_DATA),
    switchMap( action => this.authService.getCurrentUser(action.payload).pipe(
      map(user => new CurrentUserDataSuccess(user)),
      catchError(err => of(new CurrentUserDataError(err)))
      )
    )
  );

}