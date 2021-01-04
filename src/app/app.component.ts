import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public search = "";
  public names = ["Julie", "Julien", "Tintin", "Milou", "Paul", "Pierre"];

  constructor() {}

  ngOnInit(): void {}
}
