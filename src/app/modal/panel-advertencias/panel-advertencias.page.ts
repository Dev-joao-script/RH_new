import { RegistroAdvertenciaPage } from './../../lancamentos/registro-advertencia/registro-advertencia.page';
import { Advertencias, AdvertenciaService } from './../../services/advertencia.service';
import { Atestados, PanelAtestadoService } from './../../services/panel-atestado.service';
import { ContratoPage } from './../../lancamentos/contrato/contrato.page';
import { Contratos, PanelContratosService } from './../../services/panel-contratos.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormControl } from '@angular/forms';
import { AtestadosPage } from 'src/app/lancamentos/atestados/atestados.page';
import { AdvertenciaPage } from 'src/app/lancamentos/advertencia/advertencia.page';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-panel-advertencias',
  templateUrl: './panel-advertencias.page.html',
  styleUrls: ['./panel-advertencias.page.scss'],
})
export class PanelAdvertenciasPage implements OnInit {

  Documentos: Advertencias[]
  loading: any;
  isLoading = false;
  filterTerm: string;
  ip: string;
  url = 'https://www.cepelma.com.br/Update_Ferias.php';
  typeof: boolean;

  constructor(
    private service: AdvertenciaService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public router: Router,
    public http: Http,
    private location: Location,
    private https: HttpClient,
    private loadingController: LoadingController,
    public toastController: ToastController,
    
  ) { }

 async ngOnInit() {
    await this.loadingPresent();
    this.service.getall().subscribe(response => {
      this.Documentos = response;
    })
    this.loading.dismiss();
  }

  async updateItem(){
    if(this.typeof == false){
    await this.loadingPresent();
      this.service.getall().subscribe(response => {
      this.Documentos = response;
      })
    this.loading.dismiss();
    }else{
    await this.loadingPresent();
    this.service.getaPd().subscribe(response => {
      this.Documentos = response;
    this.loading.dismiss();
  })
    }
  }
  
  closeModal(){
    this.modalCtrl.dismiss(null, 'closed');
  }
  async loadingPresent() {
    this.isLoading = true;
    this.loading = await this.loadingController.create({
      message: 'Aguarde um instante...',
      spinner: 'circles',
      duration: 200,
    });
    return this.loading.present();
  }

  Back(): void {
    this.location.back()
  }


  Ver(LET){
    window.open("http://www.cepelma.com.br/DOCUMENTOS/" + LET, "_Blank", "false" )
  }

  Addferias(){
    console.log('adicionado');
  }

  GoenCC(){
    console.log()
      this.alertCtrl.create({
        header: 'Advertencia',
        message: 'Lançar Advertencia?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: AdvertenciaPage,
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

  GoenREg(nome,seq){
    console.log()
      this.alertCtrl.create({
        header: 'Advertencia',
        message: 'Anexar Advertencia?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: RegistroAdvertenciaPage,
              componentProps: {nome: nome, seq: seq }
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


  
file = new FormControl('');
file_data: any = '';
fileChange(event,seq) {
console.log(seq)
  const fileList: FileList = event.target.files;
  //check whether file is selected or not
  if (fileList.length > 0) {

    const file = fileList[0];
    //get file information such as name, size and type
    console.log('finfo', file.name, file.size, file.type);
    //max file size is 4 mb
    if ((file.size / 1048576) <= 4) {
      let formData = new FormData();
      let info = { id: 2, name: 'raja' }
      formData.append('file', file, file.name);
      formData.append('id', '2');
      formData.append('tz', new Date().toISOString())
      formData.append('update', '2')
      formData.append('info', JSON.stringify(info))
      this.file_data = formData

      this.ip = this.url + "?Cod=" + seq;
        this.https.post(this.ip, this.file_data)
        .subscribe(() => {
          this.modalCtrl.dismiss(null, 'closed');
          this.presentToast("Lançamento Concluido");
          this.modalCtrl.dismiss(null, 'created');

        }, () => {
          this.modalCtrl.dismiss(null, 'closed');
          this.presentToast("Lançamento Concluido");
          this.modalCtrl.dismiss(null, 'created');

      });

    } else {
      this.presentToast('O arquivo excede a 4 MB. selecione um arquivo ate 4 MB');
    }
  }
}

async presentToast(messageSignal: string) {
  const toast = await this.toastController.create({
    message: messageSignal,
    duration: 3000
  });
  toast.present();
}

async ionViewDidEnter(){
  await this.loadingPresent();
  this.service.getall().subscribe(response => {
    this.Documentos = response;
  })
  this.loading.dismiss();
}

async ionViewWillEnter(){
  await this.loadingPresent();
  this.service.getall().subscribe(response => {
    this.Documentos = response;
  })
  this.loading.dismiss();
}


Imprimir(codigo,motivo,tipo,alinea,dias,nome){
  if(tipo === 'Advertencia'){
  window.open('http://www.cepelma.com.br/Advertencia_Ems.php' + '?nomeFuncionario=' + nome
  + '&id=' +codigo + '&Motivo=' + motivo + '&paragrafo=' + alinea, '_blank', 'true')
  }else{
      window.open('http://www.cepelma.com.br/Suspencao_Ems.php' + '?nomeFuncionario=' + nome
      + '&id=' +codigo + '&Motivo=' + motivo + '&paragrafo=' + alinea + '&dias=' + dias, '_blank', 'true')
  }
}

}




