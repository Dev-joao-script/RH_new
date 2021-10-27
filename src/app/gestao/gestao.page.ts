import { FuncionariosHEPage } from './../modal/funcionarios-he/funcionarios-he.page';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { Observable } from 'rxjs/internal/Observable';
import { map, toArray } from 'rxjs/operators';
import { Datachart } from '../models/Placeholder.model';
import { datachartservice, GestalService } from '../services/gestal.service';
import { NgForm, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FuncionarioBhPage } from '../modal/funcionario-bh/funcionario-bh.page';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  plotOptions: ApexPlotOptions;
  labels: any[];
  grid: ApexGrid;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.page.html',
  styleUrls: ['./gestao.page.scss'],
})
export class GestaoPage implements OnInit {
  anoAnterior: any;
  anoAtual: any;
  Datachart: any;
  public show = true;
  // datachart: datachart[];

  datachart: any;
  Radial: any;
  Advertencia: any;
  Atrasos: any;
  Faltas: any;
  Sem_Batidas: any;
  AnoAtual: any;
  AnoAnterior: any;
  anoUV: any
  anoTV: any

  anotherAnt: any;
  anotherAtu: any;


  url: string = 'http://www.cepelma.com.br/Api_gestal.php';

  public Options: Partial<ChartOptions>;
  public BarOptions: Partial<ChartOptions>;
  public AreaOptions: Partial<ChartOptions>;
  public AreaExtra: Partial<ChartOptions>;
  public AreaNoturn: Partial<ChartOptions>;

  erro: any;
  Now: any;
  constructor(
    private http: HttpClient,
    public https: Http,
    public service: GestalService,
    private location: Location,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,

  ) {
    this.anoAtual = new Date().getFullYear();
    this.anoAnterior = new Date().getFullYear();
    this.anoAnterior = this.anoAnterior - 1

    this.anoTV = new Date().getFullYear();
    this.anoUV = new Date().getFullYear();
    this.anoUV = this.anoUV - 1

    var dt = new Date();
    this.Now = dt.toISOString().substring(0, 10);
    this.call();
    console.log();
    this.spackLine();
    this.spackBar();
    this.spackarea();
    this.extraArea();
    this.NoturnArea();
  }

  ngOnInit() {
    // this.anoAtual = new Date().getFullYear();
    // this.anoAnterior = new Date().getFullYear();
    // this.anoAnterior = this.anoAnterior - 1
    // this.anotherAnt = this.anoAnterior
    // this.anotherAtu = this.anoAtual
    // this.call();
    // console.log();
    // this.spackLine();
    // this.spackBar();
    // this.spackarea();
  }

  spackLine() {
    this.Options = {
      chart: {
        type: "radialBar",
        height: 200,
        animations: {
          enabled: true,
          easing: 'linear',
          speed: 600,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      series: [70],
      plotOptions: {
        radialBar: {
          track: {
            // background: "#3880ff",
            margin: 0,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              color: '#fff',
              offsetY: -10,
              fontSize: '14px'
            },
            value: {
              // color: '#fff',
              fontSize: '20px',
              offsetY: 0,
            },
          },
        },

      }
    }
  }

  spackBar() {
    this.BarOptions = {
      chart: {
        type: "bar",
        height: 200,
        width: '100%',
        toolbar: {
          show: true,
        },
        animations: {
          enabled: true,
          easing: 'easein',
          speed: 600,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 250
          }
        },

      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top",
          },
        },

      },
      series: [{
        name: 'Advertencia',
        data: [13]
      },
      {
        name: 'Atrasos',
        data: [25]
      },
      {
        name: 'Faltas',
        data: [5]
      },
      {
        name: 'Sem Batidas',
        data: [16]
      },],
      labels: ['', '', '', ''],
      dataLabels: {
        // enabled: true,
        // formatter: function(val) {
        //   return val + "%";
        // },
        // offsetY: -20,
        // style: {
        //   fontSize: "12px",
        //   colors: ["#304758"]
        // }
      },
      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        row: {
          colors: undefined,
          opacity: 0.5
        },
        column: {
          colors: undefined,
          opacity: 0.5
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },

      },
      fill: {

      },
      xaxis: {

      },
      yaxis: {

      }
    }
  }


  spackarea() {
    this.AreaOptions = {
      series: [
        // { 
        //   name: "Horas Hextras " + this.anoAnterior,
        //   data: [31, 40, 28, 51, 42, 109, 100, 95, 22, 13, 45, 72]
        // },

        // {
        //   name: "Horas Hextras " + this.anoAtual,
        //   data: [31, 55, 40, 57, 22, 112, 130, 92, 10, 26, 30, 25]
        // },
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          this.anoAtual + "-01-01T00:00:00.000Z",
          this.anoAtual + "-02-01T01:30:00.000Z",
          this.anoAtual + "-03-01T02:30:00.000Z",
          this.anoAtual + "-04-01T03:30:00.000Z",
          this.anoAtual + "-05-01T04:30:00.000Z",
          this.anoAtual + "-06-01T05:30:00.000Z",
          this.anoAtual + "-07-01T05:30:00.000Z",
          this.anoAtual + "-08-01T05:30:00.000Z",
          this.anoAtual + "-09-01T05:30:00.000Z",
          this.anoAtual + "-10-01T05:30:00.000Z",
          this.anoAtual + "-11-01T05:30:00.000Z",
          this.anoAtual + "-12-01T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }


  NoturnArea() {
    this.AreaNoturn = {

      series: [
        {
          name: "Horas Hextras " + this.anoAnterior,
          data: [31, 40, 28, 51, 42, 109, 100, 95, 22, 13, 45, 72]
        },

        {
          name: "Horas Hextras " + this.anoAtual,
          data: [31, 55, 40, 57, 22, 112, 130, 92, 10, 26, 30, 25]
        },
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          this.anoAtual + "-01-01T00:00:00.000Z",
          this.anoAtual + "-02-01T01:30:00.000Z",
          this.anoAtual + "-03-01T02:30:00.000Z",
          this.anoAtual + "-04-01T03:30:00.000Z",
          this.anoAtual + "-05-01T04:30:00.000Z",
          this.anoAtual + "-06-01T05:30:00.000Z",
          this.anoAtual + "-07-01T05:30:00.000Z",
          this.anoAtual + "-08-01T05:30:00.000Z",
          this.anoAtual + "-09-01T05:30:00.000Z",
          this.anoAtual + "-10-01T05:30:00.000Z",
          this.anoAtual + "-11-01T05:30:00.000Z",
          this.anoAtual + "-12-01T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }


  extraArea() {
    this.AreaExtra = {

      series: [
        {
          name: "Horas Hextras " + this.anoAnterior,
          data: [31, 40, 28, 51, 42, 109, 100, 95, 22, 13, 45, 72]
        },

        {
          name: "Horas Hextras " + this.anoAtual,
          data: [31, 55, 40, 57, 22, 112, 130, 92, 10, 26, 30, 25]
        },
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          this.anoAtual + "-01-01T00:00:00.000Z",
          this.anoAtual + "-02-01T01:30:00.000Z",
          this.anoAtual + "-03-01T02:30:00.000Z",
          this.anoAtual + "-04-01T03:30:00.000Z",
          this.anoAtual + "-05-01T04:30:00.000Z",
          this.anoAtual + "-06-01T05:30:00.000Z",
          this.anoAtual + "-07-01T05:30:00.000Z",
          this.anoAtual + "-08-01T05:30:00.000Z",
          this.anoAtual + "-09-01T05:30:00.000Z",
          this.anoAtual + "-10-01T05:30:00.000Z",
          this.anoAtual + "-11-01T05:30:00.000Z",
          this.anoAtual + "-12-01T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  DiurnArea() {
    this.AreaOptions = {

      series: [
        {
          name: "Horas Hextras " + this.anoAnterior,
          data: [31, 40, 28, 51, 42, 109, 100, 95, 22, 13, 45, 72]
        },

        {
          name: "Horas Hextras " + this.anoAtual,
          data: [31, 55, 40, 57, 22, 112, 130, 92, 10, 26, 30, 25]
        },
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          this.anoAtual + "-01-01T00:00:00.000Z",
          this.anoAtual + "-02-01T01:30:00.000Z",
          this.anoAtual + "-03-01T02:30:00.000Z",
          this.anoAtual + "-04-01T03:30:00.000Z",
          this.anoAtual + "-05-01T04:30:00.000Z",
          this.anoAtual + "-06-01T05:30:00.000Z",
          this.anoAtual + "-07-01T05:30:00.000Z",
          this.anoAtual + "-08-01T05:30:00.000Z",
          this.anoAtual + "-09-01T05:30:00.000Z",
          this.anoAtual + "-10-01T05:30:00.000Z",
          this.anoAtual + "-11-01T05:30:00.000Z",
          this.anoAtual + "-12-01T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  AtrasosArea() {
    this.AreaOptions = {

      series: [
        {
          name: "Horas Hextras " + this.anoAnterior,
          data: [31, 40, 28, 51, 42, 109, 100, 95, 22, 13, 45, 72]
        },

        {
          name: "Horas Hextras " + this.anoAtual,
          data: [31, 55, 40, 57, 22, 112, 130, 92, 10, 26, 30, 25]
        },
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          this.anoAtual + "-01-01T00:00:00.000Z",
          this.anoAtual + "-02-01T01:30:00.000Z",
          this.anoAtual + "-03-01T02:30:00.000Z",
          this.anoAtual + "-04-01T03:30:00.000Z",
          this.anoAtual + "-05-01T04:30:00.000Z",
          this.anoAtual + "-06-01T05:30:00.000Z",
          this.anoAtual + "-07-01T05:30:00.000Z",
          this.anoAtual + "-08-01T05:30:00.000Z",
          this.anoAtual + "-09-01T05:30:00.000Z",
          this.anoAtual + "-10-01T05:30:00.000Z",
          this.anoAtual + "-11-01T05:30:00.000Z",
          this.anoAtual + "-12-01T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  AtmArea() {
    this.AreaOptions = {

      series: [
        {
          name: "Horas Hextras " + this.anoAnterior,
          data: [31, 40, 28, 51, 42, 109, 100, 95, 22, 13, 45, 72]
        },

        {
          name: "Horas Hextras " + this.anoAtual,
          data: [31, 55, 40, 57, 22, 112, 130, 92, 10, 26, 30, 25]
        },
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          this.anoAtual + "-01-01T00:00:00.000Z",
          this.anoAtual + "-02-01T01:30:00.000Z",
          this.anoAtual + "-03-01T02:30:00.000Z",
          this.anoAtual + "-04-01T03:30:00.000Z",
          this.anoAtual + "-05-01T04:30:00.000Z",
          this.anoAtual + "-06-01T05:30:00.000Z",
          this.anoAtual + "-07-01T05:30:00.000Z",
          this.anoAtual + "-08-01T05:30:00.000Z",
          this.anoAtual + "-09-01T05:30:00.000Z",
          this.anoAtual + "-10-01T05:30:00.000Z",
          this.anoAtual + "-11-01T05:30:00.000Z",
          this.anoAtual + "-12-01T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }



  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  public call() {
    this.service.get(this.anoAnterior, this.anoAtual, this.Now, this.anoTV, this.anoUV).subscribe(
      (data: Datachart) => {
        this.Datachart = data;
      },
      error => {
        this.erro;
      })
  }

  public callFilter(anoAnterior: any, anoAtual: any, now: any, Uv, Tv) {
    // this.service.get(anoAnterior,anoAtual)
    this.http.get(this.url + '?AnoAnt=' + anoAnterior + '&AnoAtu=' + anoAtual + '&Data=' + now + '&TAnoAtu=' + Tv + '&TAnoAnt=' + Uv)
      .subscribe(
        data => {
          this.Datachart = data;
        },
        error => {
          this.erro;
        })
  }

  onSubmit(form: NgForm) {
    const pendencia = form.value;
    console.log(pendencia.anoAnterior);
    console.log(pendencia.anoAtual);
    console.log(pendencia.Now);
    this.anoAnterior = pendencia.anoAnterior
    this.anoAtual = pendencia.anoAtual
    this.Now = pendencia.Now
    this.callFilter(pendencia.anoAnterior, pendencia.anoAtual, pendencia.Now, pendencia.anoUV, pendencia.anoTV);
    // this.reload();
  }

  reload() {
    this.show = false;
    setTimeout(() => this.show = true);
  }

  Back(): void {
    this.location.back()
  }


  OpenHoraExtrasF() {
    console.log()
    this.alertCtrl.create({
      header: 'Visualizar',
      message: 'Visualizar Horas Extras?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.modalCtrl.create({
            component: FuncionariosHEPage,
            // componentProps: { }
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
          }).then(({ data, role }) => {
            if (role === 'created') {
              console.log(data)
            }
          });

        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
  }


  OpenBancoDeHoras() {
    console.log()
    this.alertCtrl.create({
      header: 'Visualizar',
      message: 'Visualizar Banco de Horas?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.modalCtrl.create({
            component: FuncionarioBhPage,
            // componentProps: { }
          }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
          }).then(({ data, role }) => {
            if (role === 'created') {
              console.log(data)
            }
          });

        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
  }
}

