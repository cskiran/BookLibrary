import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as UserActions from "../../actions/UserActions";
import { getUserState } from "src/app/selectors/UserSelector";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() categoryData$: Observable<any>;
  @Output() selectedCategory = new EventEmitter<any>();
  @Input() addBook: boolean;
  currentCat: string = "select category";
  userData: Subscription;
  userDetails: any;
  userid: any;
  username: string = null;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.initObs();
  }

  selectCat(cat, id) {
    this.currentCat = cat;
    this.selectedCategory.emit(id);
  }

  login(event) {
    let userDetails = event.value;
    this.store.dispatch(
      new UserActions.LoginAction(userDetails.username, userDetails.password)
    );
  }

  initObs() {
    this.userData = this.store
      .pipe(
        select(getUserState),
        tap(data => {
          let match = document.cookie.match(
            new RegExp("(^| )" + "username" + "=([^;]+)")
          );
          if (match) {
            this.username = match[2];
          }
        })
      )
      .subscribe(data => {
        this.userDetails = data;
      });
  }

  myBooks() {
    let match = document.cookie.match(new RegExp("(^| )" + "id" + "=([^;]+)"));
    if (match) {
      this.userid = match[2];
    }
    window.location.href = location.origin + `/mybooks/${this.userid}`;
  }

  addaBook() {
    window.location.href = location.origin + `/addbook`;
  }
}
