import { Component } from '@angular/core';
import { BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";
import { StatsPage } from '../pages/stats/stats.page';
import { ModalController } from '@ionic/angular';
import { ApexChart, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive } from 'ngx-apexcharts';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
      public chartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: string[];
    responsive: ApexResponsive[];
    legend?: ApexLegend;
    plotOptions?: ApexPlotOptions;
  } = {
    series: [55, 25, 20],
    chart: {
      type: 'pie',  // Cambiar a tipo 'pie' para un gráfico sin agujero
      width: '100%',
    },
    labels: ['Food', 'Transport', 'Entertainment'],
    colors: ['#014ce6', '#9b9db2', '#bbbdcc'],
    plotOptions: {
      pie: {
        donut: {
          size: '0%',   
        },
          
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: ['#014ce6','#9b9db2', '#bbbdcc' ],
        useSeriesColors: false,
      },
      fontSize: '16px',
      fontWeight: 500,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  constructor(
    private modalController: ModalController
  ) {}
 

}
