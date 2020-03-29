import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { LoadCatalogAction } from "src/app/actions/catalogActions";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { getCatalogState } from "src/app/selectors/CatalogSelector";

@Component({
  selector: "app-mybooks",
  templateUrl: "./mybooks.component.html",
  styleUrls: ["./mybooks.component.css"]
})
export class MybooksComponent implements OnInit {
  catalogData$: Observable<any>;

  constructor(private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(
      new LoadCatalogAction(null, null, this.route.snapshot.params["id"])
    );
    this.initObs();
  }

  initObs() {
    this.catalogData$ = this.store.pipe(select(getCatalogState));
  }

  showMore(offset) {
    if (offset) {
      this.store.dispatch(new LoadCatalogAction(offset));
    } else {
      alert("No more books to show");
    }
  }
}
