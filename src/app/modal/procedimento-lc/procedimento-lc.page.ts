import { Procedimentos, ProcedimentosService } from './../../procedimentos.service';
import { Funcionarios, FuncionariosService } from 'src/app/service/funcionarios.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-Procedimento-lc',
  templateUrl: './Procedimento-lc.page.html',
  styleUrls: ['./Procedimento-lc.page.scss'],
})
export class ProcedimentoLcPage implements OnInit {
  @Input() Procedimento: Procedimentos;
  isUpdate = false;

  dataSbt = {
    seq: '',
    Titulo: '',
    Procedimento: '',
    Data: '',
  };

  funcionarios: Funcionarios[];
  Name = "Teste";
  valueB: string;
  valueA: string;
  selected: any;


  KeyArray:any;
  KeyCpf:any;
  Token:string;
  URL: string;


  constructor(
    private modalCtrl: ModalController,
    private service: ProcedimentosService,
    private FuncionariosService: FuncionariosService,
    private http: Http,
    ) { }


  ngOnInit() {
    console.log(this.Procedimento)
    this.FuncionariosService.getAll().subscribe(response => {
      this.funcionarios = response;
    })

    if (this.Procedimento){
      this.isUpdate = true;
      this.dataSbt = this.Procedimento;      
    }
  }

onSubmit(form: NgForm){
 const pendencia = form.value;
 if (this.isUpdate) {
    this.service.update(pendencia, this.Procedimento.seq).subscribe(() => {
      pendencia.seq = this.Procedimento.seq;
      this.modalCtrl.dismiss(pendencia, 'Updated');
    })
  }else{
    this.service.create(pendencia).subscribe( 
      response => {
        this.modalCtrl.dismiss(response, 'created');
      });
  }
}

closeModal(){
  this.modalCtrl.dismiss(null, 'closed');
}

teste(racas: any) {
    this.Name = racas.detail.value;
    console.log(racas);
    const fn = this.Name.split("/");
    this.valueA = fn[0];
    this.valueB = fn[1];
    console.log(this.valueA);
    console.log(this.valueB);
    this.selected = fn[1];
}


}
