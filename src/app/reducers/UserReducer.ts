import * as UserActions from "../actions/UserActions";

export interface UserState {
  data?: any;
}

export const initialState: UserState = {
  data: null
};

export function reducer(
  state = initialState,
  action: UserActions.UserActions
): UserState {
  switch (action.type) {
    case UserActions.UserActionTypes.LoginSuccessAction:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
