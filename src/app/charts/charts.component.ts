import { Component, OnInit } from "@angular/core";
import { ChartsApisService } from "../charts-apis.service";
import { Chart, registerables } from "chart.js";
import { salesdata } from "../../chartdata.modul";

Chart.register(...registerables);

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"],
})
export class chartsComponent implements OnInit {
  chartsdatas: salesdata[] = [];
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  constructor(private service: ChartsApisService) {}

  ngOnInit(): void {
    this.loadcharts();
  }

  loadcharts(): void {
    this.service.getDiffCharts().subscribe((item) => {
      this.chartsdatas = item;
      if (this.chartsdatas != null) {
        this.chartsdatas.map((arr) => {
          this.labeldata.push(arr.year);
          this.realdata.push(arr.amount);
          this.colordata.push(arr.colorcode);
        });
        this.rendorBarChart(this.labeldata, this.realdata, this.colordata);
        this.rendorPieChart(this.labeldata, this.realdata, this.colordata);
        this.rendorDoughnutChart(this.labeldata, this.realdata, this.colordata);
        this.rendorRadarChart(this.labeldata, this.realdata, this.colordata);
        this.rendorpolarAreaChart(
          this.labeldata,
          this.realdata,
          this.colordata
        );
        this.rendorLineChart(this.labeldata, this.realdata, this.colordata);
      }
      console.log(item);
    });
  }
  rendorBarChart(labeldata: any, valuedata: any, colorcode: any) {
    this.rendorchart(labeldata, valuedata, colorcode, "barChart", "bar");
  }
  rendorPieChart(labeldata: any, valuedata: any, colorcode: any) {
    this.rendorchart(labeldata, valuedata, colorcode, "pieChart", "pie");
  }
  rendorDoughnutChart(labeldata: any, valuedata: any, colorcode: any) {
    this.rendorchart(
      labeldata,
      valuedata,
      colorcode,
      "doughnutChart",
      "doughnut"
    );
  }
  rendorRadarChart(labeldata: any, valuedata: any, colorcode: any) {
    this.rendorchart(labeldata, valuedata, colorcode, "radarChart", "radar");
  }
  rendorpolarAreaChart(labeldata: any, valuedata: any, colorcode: any) {
    this.rendorchart(
      labeldata,
      valuedata,
      colorcode,
      "polarAreaChart",
      "polarArea"
    );
  }
  rendorLineChart(labeldata: any, valuedata: any, colorcode: any) {
    this.rendorchart(labeldata, valuedata, colorcode, "lineChart", "line");
  }
  rendorchart(
    labeldata: any,
    valuedata: any,
    colorcode: any,
    chartid: string,
    charttype: any
  ) {
    const barcharts = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            data: valuedata,
            backgroundColor: this.colordata,
          },
        ],
      },
    });
  }
}
