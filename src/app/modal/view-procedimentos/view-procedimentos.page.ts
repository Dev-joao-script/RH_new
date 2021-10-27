import { Procedimentos, ProcedimentosService } from './../../procedimentos.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Platform } from  '@ionic/angular';
import { Cordova } from '@ionic-native/core';

@Component({
  selector: 'app-view-procedimentos',
  templateUrl: './view-procedimentos.page.html',
  styleUrls: ['./view-procedimentos.page.scss'],
})
export class ViewProcedimentosPage implements OnInit {
  @Input() Procedimento: Procedimentos;

  dataSbt: any = {
    seq: '',
    Titulo: '',
    Procedimento: '',
    Data: '',
  };


  constructor(
    private modalCtrl: ModalController,
    private service: ProcedimentosService,
    public previewAnyFile: PreviewAnyFile,
    public Platform: Platform
    ) { }


  ngOnInit() {
 this.Procedimento;      
    console.log(this.Procedimento)
  }

closeModal(){
  this.modalCtrl.dismiss(null, 'closed');
}

}
