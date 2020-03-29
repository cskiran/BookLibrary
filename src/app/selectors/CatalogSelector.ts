import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CatalogState } from "../reducers/catalogReducer";

export const catalogState = createFeatureSelector<CatalogState>("catalog");

export const getCatalogState = createSelector(
  catalogState,
  state => state.data
);

export const getCategoryState = createSelector(
  catalogState,
  state => state.category
);
