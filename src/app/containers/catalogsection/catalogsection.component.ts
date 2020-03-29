import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as CatalogActions from "../../actions/catalogActions";
import { Observable, Subscription } from "rxjs";
import {
  getCatalogState,
  getCategoryState
} from "../../selectors/CatalogSelector";
@Component({
  selector: "app-catalogsection",
  templateUrl: "./catalogsection.component.html",
  styleUrls: ["./catalogsection.component.css"]
})
export class CatalogsectionComponent implements OnInit {
  catalogData$: Observable<any>;
  datacata: any;
  categoryData$: Observable<any>;
  categoryData: Subscription;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new CatalogActions.LoadCatalogAction());
    this.store.dispatch(new CatalogActions.LoadCategoryAction());
    this.initObs();
  }

  initObs() {
    this.catalogData$ = this.store.pipe(select(getCatalogState));
    this.categoryData$ = this.store.pipe(select(getCategoryState));
    this.categoryData = this.store
      .pipe(select(getCategoryState))
      .subscribe(data => {
        console.log(data);
      });
  }

  showMore(offset) {
    if (offset) {
      this.store.dispatch(new CatalogActions.LoadCatalogAction(offset));
    } else {
      alert("No more books to show");
    }
  }

  sortCat(event) {
    this.store.dispatch(new CatalogActions.LoadCatalogAction(null, event));
  }
}
