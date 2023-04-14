import { Component, ViewChild, Input } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: "app-country-cases-chart",
  templateUrl: "./country-cases-chart.component.html",
  styleUrls: ["./country-cases-chart.component.css"]
})
export class CountryCasesChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() countryData;

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "Confirmed",
          data: this.generateDayWiseTimeSeries(this.countryData, "Confirmed")
        },
        {
          name: "Recovered",
          data: this.generateDayWiseTimeSeries(this.countryData, "Recovered")
        },
        {
          name: "Deaths",
          data: this.generateDayWiseTimeSeries(this.countryData, "Deaths")
        }
      ],
      chart: {
        type: "area",
        height: 350,
        stacked: true,
        events: {
          selection: function(chart, e) {
            console.log(new Date(e.xaxis.min));
          }
        }
      },
      colors: ["#FD4E71", "#6DD400", "#9475FF"],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0,
          opacityTo: 0.1
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      xaxis: {
        type: "datetime"
      }
    };
  }

  private generateDayWiseTimeSeries = function(items, key) {
    const stats = items.map(item => [new Date(item.Date).getTime(), item[key]]);
    if (['Recovered', 'Deaths'].indexOf(key) > -1) {
      console.log(key, stats);
    }
    return stats.splice(0, 50);
  };
}
