import * as catalogActions from "../actions/catalogActions";

export interface CatalogState {
  data?: any;
  category?: any;
}

export const initialState: CatalogState = {
  data: null,
  category: null
};

export function reducer(
  state = initialState,
  action: catalogActions.CatalogActions
): CatalogState {
  switch (action.type) {
    case catalogActions.CatalogActionTypes.LoadedCatalogAction:
      return { ...state, data: action.payload };
    case catalogActions.CatalogActionTypes.LoadedCategoryAction:
      return { ...state, category: action.payload };

    default:
      return state;
  }
}
