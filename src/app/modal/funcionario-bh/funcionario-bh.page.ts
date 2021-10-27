import { FuncionarioHeService } from './../../service/funcionario-he.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common'
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-funcionario-bh',
  templateUrl: './funcionario-bh.page.html',
  styleUrls: ['./funcionario-bh.page.scss'],
})
export class FuncionarioBhPage implements OnInit{
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
  Periodo: any;
  anotherAnt:any;
  anotherAtu:any;
  AllDate: any;
  loading: any;
  isLoading = false;
  filterTerm: string;


  url: string = 'http://www.cepelma.com.br/Totalizadores.php?Periodo=2021-08';
  
  erro: any;
  Now: any;
  constructor(
    private http: HttpClient,
    public https: Http,
    public service: FuncionarioHeService,
    private location: Location,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingController: LoadingController,
    public toastController: ToastController,
  ) {
    this.AllDate = true;
  }
  ngOnInit(): void {
    this.AllDate == true;
    this.anoAtual = new Date().getFullYear();
    this.anoAnterior = new Date().getFullYear();
    this.anoAnterior = this.anoAnterior - 1

    this.anoTV = new Date().getFullYear();
    this.anoUV = new Date().getFullYear();
    this.anoUV = this.anoUV - 1
    let Mes = new Date().getMonth().toString();

    if(Mes != "10" && Mes != "11" && Mes != "12" ){
      Mes = "0"+ Mes.toString();
    }

    let Year = new Date().getFullYear();
    let Periodo_inicial  = Mes +"/"+Year;
    this.Periodo= Periodo_inicial;

    var dt = new Date();
    this.Now = dt.toISOString().substring(0, 10); 
    this.callOpen();
    console.log();
  }


  
  public call(Periodo: any) {
    console.log(Periodo)
    let fn = Periodo.split("/");
    let y: string = fn[1]
    let m: string = fn[0]
    let Pr = y + "-" + m;
    console.log(Pr);
    this.service.getting(Pr).subscribe(
      data => {
        this.Datachart = data;
        console.log(this.Datachart)
      },
      error => {
        this.erro;
      })
  }

  public callOpen() {
    this.service.getAll().subscribe(
      data => {
        this.Datachart = data;
        console.log(this.Datachart)
      },
      error => {
        this.erro;
      })
  }

  reload() {
    this.show = false;
    setTimeout(() => this.show = true);
  }

  onSubmit(form: NgForm) {
    console.log(form.value["Periodo"])
    this.call(form.value["Periodo"]);
    this.reload()
  }

  closeModal(){
    this.modalCtrl.dismiss(null, 'closed');
  }

  async updateItem(form: NgForm){
    if(this.AllDate == false){
      console.log(this.AllDate)
      console.log(form.value["Periodo"])
      this.call(form.value["Periodo"]);
      this.reload()
    }else{
    console.log(this.AllDate)
    await this.loadingPresent();
    this.service.getAll().subscribe(
      data => {
        this.Datachart = data;
        console.log(this.Datachart)
      },
      error => {
        this.erro;
      })
    }
  }


  async presentToast(messageSignal: string) {
    const toast = await this.toastController.create({
      message: messageSignal,
      duration: 3000
    });
    toast.present();
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
}

