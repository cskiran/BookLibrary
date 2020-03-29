import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserState } from "../reducers/UserReducer";

export const userState = createFeatureSelector<UserState>("user");

export const getUserState = createSelector(userState, state => state.data);
