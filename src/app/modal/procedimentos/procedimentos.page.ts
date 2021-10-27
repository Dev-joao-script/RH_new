import { ViewProcedimentosPage } from './../view-procedimentos/view-procedimentos.page';
import { FeedModalPage } from './../../feed-modal/feed-modal.page';
import { Procedimentos, ProcedimentosService } from './../../Procedimentos.service';
import { AdvertenciaPage } from '../advertencia/advertencia.page';
import { ViewPage } from '../view/view.page';
import { Component, NgZone, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common'
import { ProcedimentoLcPage } from '../procedimento-lc/procedimento-lc.page';


@Component({
  selector: 'app-Procedimentos',
  templateUrl: './Procedimentos.page.html',
  styleUrls: ['./Procedimentos.page.scss'],
})
export class ProcedimentosPage implements OnInit {
  Procedimentos: Procedimentos[];
  Procedimento: Procedimentos;
  url: string = "https://www.cepelma.com.br/";
  menbros: any;
  routerHome: string;
  sourseresolveone: string;
  Roting: string;
  filterTerm: string;
  static User:string;
  isLoading = false;
  loading: any;

  constructor(
    private service: ProcedimentosService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private location: Location,
    public router: Router,
    public http: Http,
    private zone: NgZone,
    private loadingController: LoadingController,
    ) { }

  async ngOnInit() {
    await this.loadingPresent();
    this.service.getAll().subscribe(response => {
      this.Procedimentos = response;
    })
    this.routerHome = this.router.url;
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    this.sourseresolveone = fn[2];
    console.log(this.sourseresolveone)
    this.loading.dismiss();

  }

  removeP(id: string) {

    this.alertCtrl.create({
      header: 'Deletar',
      message: 'Deseja Deletar este registro?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.service.delete(id).subscribe(() => {
            this.Procedimentos = this.Procedimentos.filter(stdout => stdout.seq !== id);
          });
        }
      },
      { text: 'Não' }
      ]
    })
      .then(alertEl => alertEl.present())
  }

  Back(): void {
    this.location.back()
  }

  add() {

    this.alertCtrl.create({
      header: 'Adicionar',
      message: 'Adicionar qual?',
      buttons: [
        {
          text: 'Novo',
          handler: () => {
  
            this.modalCtrl.create({
              component: ProcedimentoLcPage
            })
              .then(modal => {
                modal.present();
                return modal.onDidDismiss();
              })
              .then(({ data, role }) => {
                if (role === 'created') {
                  this.Procedimentos.push(data);
                }
              });
          }
        },
      ]
    })
      .then(alertEl => alertEl.present())
  }


  View(Procedimento){
    console.log(Procedimento)
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja visualizar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: ViewProcedimentosPage,
              componentProps: { Procedimento }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.Procedimentos = this.Procedimentos.filter(std => {
                if (data.seq === std.seq) {
                  return data;
                }
                return std;
              })
            });
  
           }
        },
        { text: 'Não' }
      ]
      })
      .then(alertEl => alertEl.present())
  }



  edit(Procedimento: Procedimentos) {
    console.log(Procedimento)
      this.alertCtrl.create({
        header: 'Editar',
        message: 'Deseja editar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: ProcedimentoLcPage,
              componentProps: { Procedimento }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();

            }).then(({data, role}) => {
              this.Procedimentos = this.Procedimentos.filter(std => {
                if (data.seq === std.seq) {
                  return data;
                }
                return std;
              })
            });
  
           }
        },
        { text: 'Não' }
      ]
      })
      .then(alertEl => alertEl.present())
  }

  getreturn(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    const sourseresolve = fn[2];
    console.log(sourseresolve)
      const source = this.http.get(this.url+'dados.php?Data='+sourseresolve).pipe(map(res=>res.json()));
      return source.subscribe(
         data => this.menbros = data,
         err => console.log(err)
       );
     }

     
     async loadingPresent() {
      this.isLoading = true;
      this.loading = await this.loadingController.create({
        message: 'Aguarde um instante...',
        spinner: 'circles',
      });
      return this.loading.present();
    }
  
    async loadingDismiss() {
      this.isLoading = false;
      return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
    }


}
