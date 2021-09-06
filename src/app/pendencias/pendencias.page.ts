import { PendenciaPontoService } from './../service/pendencia-ponto.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Pendencia_assinatura } from '../service/pendencia-ponto.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-pendencias',
  templateUrl: './pendencias.page.html',
  styleUrls: ['./pendencias.page.scss'],
})
export class PendenciasPage implements OnInit {

  pontos: Pendencia_assinatura[]
  loading: any;
  isLoading = false;
  filterTerm: string;

  constructor(
    private service: PendenciaPontoService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public router: Router,
    public http: Http,
    private location: Location,
    private https: HttpClient,
    private loadingController: LoadingController,
    public toastController: ToastController
  ) { }

 async ngOnInit() {
    await this.loadingPresent();
    this.service.getall().subscribe(response => {
      this.pontos = response;
    })

    this.loading.dismiss();
  }
  

  async loadingPresent() {
    this.isLoading = true;
    this.loading = await this.loadingController.create({
      message: 'Aguarde um instante...',
      spinner: 'circles',
      duration: 2000,
    });
    return this.loading.present();
  }

  Back(): void {
    this.location.back()
  }


  Ver(LET){
    window.open("http://www.cepelma.com.br/DOCUMENTOS/" + LET, "_Blank", "false" )
  }
}
