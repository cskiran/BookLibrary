import { Action } from "@ngrx/store";

export enum CatalogActionTypes {
  LoadCatalogAction = "[load] Load catalog",
  LoadedCatalogAction = "[load] Loaded catalog",
  LoadCategoryAction = "[load] Load category",
  LoadedCategoryAction = "[load] Loaded category",
  AddCatalogAction = "[Add] AddCatalog"
}

export class LoadCatalogAction implements Action {
  readonly type = CatalogActionTypes.LoadCatalogAction;
  constructor(public offset?: any, public field?: any, public id?: any) {}
}

export class AddCatalogAction implements Action {
  readonly type = CatalogActionTypes.AddCatalogAction;
  constructor(public payload: any) {}
}

export class LoadCategoryAction implements Action {
  readonly type = CatalogActionTypes.LoadCategoryAction;
  constructor(public offset?: any) {}
}

export class LoadedCatalogAction implements Action {
  readonly type = CatalogActionTypes.LoadedCatalogAction;
  constructor(public payload: any) {}
}

export class LoadedCategoryAction implements Action {
  readonly type = CatalogActionTypes.LoadedCategoryAction;
  constructor(public payload: any) {}
}

export type CatalogActions =
  | LoadCatalogAction
  | LoadedCatalogAction
  | LoadCategoryAction
  | LoadedCategoryAction
  | AddCatalogAction;
