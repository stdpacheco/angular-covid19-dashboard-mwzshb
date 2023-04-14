import { Component } from "@angular/core";

import { DataService } from "./data.service";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data$: Observable<any> = this.dataService.getData();
  countryData$: Observable<any> = this.dataService.getDataForACountry("IN");
  constructor(private readonly dataService: DataService) {}

  changeCountry(countryCode) {
    this.countryData$ = this.dataService.getDataForACountry(countryCode);
  }
}
