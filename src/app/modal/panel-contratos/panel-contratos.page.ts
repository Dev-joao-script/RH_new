import { ContratoPage } from './../../lancamentos/contrato/contrato.page';
import { Contratos, PanelContratosService } from './../../services/panel-contratos.service';
import { FeriasNewPage } from './../../ferias-new/ferias-new.page';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-panel-contratos',
  templateUrl: './panel-contratos.page.html',
  styleUrls: ['./panel-contratos.page.scss'],
})
export class PanelContratosPage implements OnInit {

  Documentos: Contratos[]
  loading: any;
  isLoading = false;
  filterTerm: string;
  ip: string;
  url = 'https://www.cepelma.com.br/Update_Ferias.php';

  constructor(
    private service: PanelContratosService,
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
  
  closeModal(){
    this.modalCtrl.dismiss(null, 'closed');
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

  Addferias(){
    console.log('adicionado');
  }

  GoenCC(){
    console.log()
      this.alertCtrl.create({
        header: 'Contrato de Trabalho',
        message: 'Lançar Contrato?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.modalCtrl.create({
              component: ContratoPage,
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

}




