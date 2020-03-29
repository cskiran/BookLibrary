import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { CatalogsectionComponent } from "./containers/catalogsection/catalogsection.component";
import { CatalogEffects } from "./effects/CatalogEffects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { UserEffects } from "./effects/UserEffect";
import { routing } from "./app.routing";
import { MybooksComponent } from './containers/mybooks/mybooks.component';
import { AddBookComponent } from './containers/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    CatalogsectionComponent,
    MybooksComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CatalogEffects, UserEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
