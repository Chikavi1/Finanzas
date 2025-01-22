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

  public mainChart: {
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
      type: 'pie',  
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
  
  public expensesChart: {
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
      type: 'pie',  
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
  
   public debtsChart: {
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
      type: 'pie',  
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
  
  public growthChart: {
        series: ApexNonAxisChartSeries;
        chart: ApexChart;
        labels: string[];
        colors: string[];
        responsive: ApexResponsive[];
        legend?: ApexLegend;
        plotOptions?: ApexPlotOptions;
      } = {
    series: [35, 25, 20],
    chart: {
      type: 'pie',  
      width: '100%',
    },
    labels: ['&nbsp; Ahorros', '&nbsp; Objetivos ', '&nbsp; Inversiones'],
    colors: ['#006b44', '#336ae0ec','#014ce6'],
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
        colors: ['#006b44', '#336ae0ec','#014ce6'],
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
  
   public incomesvsexpensesChart: {
        series: ApexNonAxisChartSeries;
        chart: ApexChart;
        labels: string[];
        colors: string[];
        responsive: ApexResponsive[];
        legend?: ApexLegend;
        plotOptions?: ApexPlotOptions;
      } = {
    series: [35, 25,],
    chart: {
      type: 'pie',  
      width: '100%',
    },
    labels: ['&nbsp; Ingreso', '&nbsp; Gastos'],
    colors: ['#006b44', '#e04733ec'],
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
        colors: ['#006b44', '#e04733ec'],
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
