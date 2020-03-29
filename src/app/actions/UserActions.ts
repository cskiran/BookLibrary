import { Action } from "@ngrx/store";

export enum UserActionTypes {
  LoginAction = "[User] Login",
  LoginSuccessAction = "[User] Login success"
}

export class LoginAction implements Action {
  readonly type = UserActionTypes.LoginAction;
  constructor(public username?: any, public password?: any) {}
}

export class LoginSuccessAction implements Action {
  readonly type = UserActionTypes.LoginSuccessAction;
  constructor(public data: any) {}
}

export type UserActions = LoginAction | LoginSuccessAction;
