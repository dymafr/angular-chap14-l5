import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public search = "";
  public names = new Observable(["Julie", "Julien", "Tintin", "Milou", "Paul", "Pierre"]);

  constructor() {}

  ngOnInit(): void {}
}
