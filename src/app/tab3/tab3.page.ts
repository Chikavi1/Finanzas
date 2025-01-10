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
    series: [35, 25, 20, 15],
    chart: {
      type: 'pie',  // Cambiar a tipo 'pie' para un gráfico sin agujero
      width: '100%',
    },
    labels: ['&nbsp;Ingreso', '&nbsp;Gastos', '&nbsp;Deudas','&nbsp;Crecimiento Financiero'],
    colors: ['#006b44', '#e04733ec', '#ffa500','#014ce6'],
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
        colors: ['#006b44', '#e04733ec', '#ffa500','#014ce6'],
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
