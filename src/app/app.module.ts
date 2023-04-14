import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NgApexchartsModule } from "ng-apexcharts";

import { AppComponent } from "./app.component";
import { StatCardComponent } from "./stat-card/stat-card.component";
import { HttpClientModule } from "@angular/common/http";
import { CountryCasesChartComponent } from './country-cases-chart/country-cases-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgApexchartsModule
  ],
  declarations: [AppComponent, StatCardComponent, CountryCasesChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSearch, faCaretDown);
  }
}
