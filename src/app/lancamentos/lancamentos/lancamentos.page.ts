import { PanelAdvertenciasPage } from './../../modal/panel-advertencias/panel-advertencias.page';
import { PanelAtestadosPage } from './../../modal/panel-atestados/panel-atestados.page';
import { ContratoPage } from './../contrato/contrato.page';
import { FeriasPage } from './../ferias/ferias.page';
import { PontoPage } from './../ponto/ponto.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PagamentosPage } from '../pagamentos/pagamentos.page';
import { PontoLotePage } from '../ponto-lote/ponto-lote.page';
import { PagamentosLotePage } from '../pagamentos-lote/pagamentos-lote.page';
import { Location } from '@angular/common'
import { PanelContratosPage } from 'src/app/modal/panel-contratos/panel-contratos.page';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {

  constructor(public router: Router,    
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private location: Location,
    ) { }

  ngOnInit() {

  }
  GoenCC(){
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PagamentosPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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

  GoenCp(){
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PontoPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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
  
  Back(): void {
    this.location.back()
  }

  GoenCpL(){
    
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PontoLotePage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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

  
  GoenCCL(){
    console.log()
      this.alertCtrl.create({
        header: 'Visualizar',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PagamentosLotePage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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

  
  GoenFr(){
    console.log()
      this.alertCtrl.create({
        header: 'Ferias Avisadas',
        message: 'Deseja Abrir?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: FeriasPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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


  GoenCTr(){
    console.log()
      this.alertCtrl.create({
        header: 'Contrato de Trabalho',
        message: 'Deseja Enviar?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PanelContratosPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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

  GoenAte(){
    console.log()
      this.alertCtrl.create({
        header: 'Atestados',
        message: 'Deseja abrir?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PanelAtestadosPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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
  
  GoenAdv(){
    console.log()
      this.alertCtrl.create({
        header: 'Advertencias',
        message: 'Deseja abrir?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: PanelAdvertenciasPage,
              // componentProps: { }
            }).then(modal => {
              modal.present();
              return modal.onDidDismiss();
            }).then(({data, role}) => {
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
