import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  CatalogActionTypes,
  LoadedCatalogAction,
  LoadCatalogAction,
  LoadCategoryAction,
  LoadedCategoryAction,
  AddCatalogAction
} from "../actions/catalogActions";
import { switchMap, map } from "rxjs/operators";
import { ApiConstanst } from "../constants/apiconstants";

@Injectable()
export class CatalogEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadLibrary$: Observable<any> = this.actions$.pipe(
    ofType<LoadCatalogAction>(CatalogActionTypes.LoadCatalogAction),
    switchMap(LoadCatalogAction => {
      const header = {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${ApiConstanst.API_KEY}`
        )
      };
      let url = "";
      if (LoadCatalogAction.offset) {
        url = `https://api.airtable.com/v0/appgEdcgWyLR3MHc9/library?pageSize=20&view=Grid%20view&offset=${LoadCatalogAction.offset}`;
      } else {
        url =
          "https://api.airtable.com/v0/appgEdcgWyLR3MHc9/library?pageSize=20&view=Grid%20view";
      }

      if (
        LoadCatalogAction.field !== undefined &&
        LoadCatalogAction.field !== null
      ) {
        url =
          url + `&filterByFormula=({category_id}= ${LoadCatalogAction.field})`;
      }
      if (LoadCatalogAction.id !== undefined && LoadCatalogAction.id !== null) {
        url =
          url +
          `&filterByFormula=({created_by_user_id}= ${LoadCatalogAction.id})`;
      }
      return this.http.get<any>(url, header).pipe(
        map(data => {
          return new LoadedCatalogAction(data);
        })
      );
    })
  );

  @Effect()
  loadCatalog$: Observable<any> = this.actions$.pipe(
    ofType<LoadCategoryAction>(CatalogActionTypes.LoadCategoryAction),
    switchMap(LoadCategoryAction => {
      const header = {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${ApiConstanst.API_KEY}`
        )
      };
      let url =
        "https://api.airtable.com/v0/appgEdcgWyLR3MHc9/category?view=Grid%20view";

      return this.http.get<any>(url, header).pipe(
        map(data => {
          return new LoadedCategoryAction(data);
        })
      );
    })
  );

  @Effect()
  addToCatalog$: Observable<any> = this.actions$.pipe(
    ofType<AddCatalogAction>(CatalogActionTypes.AddCatalogAction),
    switchMap(AddCatalogAction => {
      const header = {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${ApiConstanst.API_KEY}`
        )
      };
      let requestBody = {};
      requestBody["records"] = [];
      requestBody["records"].push(AddCatalogAction.payload);
      let url = "https://api.airtable.com/v0/appgEdcgWyLR3MHc9/library";

      return this.http.post<any>(url, AddCatalogAction.payload, header).pipe(
        map(data => {
          let match = document.cookie.match(
            new RegExp("(^| )" + "id" + "=([^;]+)")
          );
          let userId;
          if (match) {
            userId = match[2];
          }
          window.location.href = location.origin + `/mybooks/${userId}`;
        })
      );
    })
  );
}
