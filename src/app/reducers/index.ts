import * as catalogReducer from "./catalogReducer";
import * as userReducer from "./UserReducer";
import { ActionReducerMap } from "@ngrx/store";

export interface State {
  catalog: catalogReducer.CatalogState;
  user: userReducer.UserState;
}

export const reducers: ActionReducerMap<State> = {
  catalog: catalogReducer.reducer,
  user: userReducer.reducer
};
