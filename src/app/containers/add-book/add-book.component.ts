import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddCatalogAction } from "src/app/actions/catalogActions";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  addNewBook(book) {
    let bookDetails = book.value;
    let match = document.cookie.match(new RegExp("(^| )" + "id" + "=([^;]+)"));
    if (match) {
      bookDetails["created_by_user_id"] = parseInt(match[2]);
    }
    let finalDetailPayLoad = {};
    finalDetailPayLoad["fields"] = bookDetails;
    this.store.dispatch(new AddCatalogAction(finalDetailPayLoad));
  }
}
