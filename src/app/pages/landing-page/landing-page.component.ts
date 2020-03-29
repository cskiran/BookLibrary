import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Store, select } from "@ngrx/store";
import { getCategoryState } from "src/app/selectors/CatalogSelector";
import { LoadCategoryAction } from "src/app/actions/catalogActions";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
