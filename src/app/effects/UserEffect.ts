import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  UserActions,
  UserActionTypes,
  LoginSuccessAction,
  LoginAction
} from "../actions/UserActions";
import { switchMap, map } from "rxjs/operators";
import { ApiConstanst } from "../constants/apiconstants";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadLibrary$: Observable<any> = this.actions$.pipe(
    ofType<LoginAction>(UserActionTypes.LoginAction),
    switchMap(LoginAction => {
      const header = {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${ApiConstanst.API_KEY}`
        )
      };
      return this.http
        .get<any>(
          `https://api.airtable.com/v0/appgEdcgWyLR3MHc9/user?maxRecords=3&view=Grid%20view`,
          header
        )
        .pipe(
          map(data => {
            data = data.records.filter(
              record => record.fields.username == LoginAction.username
            );
            if (data.length) {
              document.cookie = `username=${LoginAction.username}`;
              document.cookie = `id=${data[0].fields.id}`;
            }
            return new LoginSuccessAction(data);
          })
        );
    })
  );
}
