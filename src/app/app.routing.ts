import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { MybooksComponent } from "./containers/mybooks/mybooks.component";
import { AddBookComponent } from "./containers/add-book/add-book.component";

const arr: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "mybooks/:id", component: MybooksComponent },
  { path: "addbook", component: AddBookComponent }
];

export const routing = RouterModule.forRoot(arr);
