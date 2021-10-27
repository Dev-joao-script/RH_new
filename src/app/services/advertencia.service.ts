import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Advertencias {
  seq: any;
  Codigo: any;
  Funcionario: any;
  Numero: any;
  Data: any;
  Testemunha_1: any;
  Testemunha_2: any;
  Alinea: any;
  Tipo: any;
  Motivo: any;
  Scan: any;
  Punição: any;
  Dias: any;
  Gravidade: any;
}

@Injectable({
  providedIn: 'root'
})
export class AdvertenciaService {

  private url = "https://www.cepelma.com.br/Api_Advertencias_panel.php";

  constructor(
              private http: HttpClient,
              ) { }

              getall(){
                return this.http.get<[Advertencias]>(this.url)
              }

              getaPd(){
                return this.http.get<[Advertencias]>('http://www.cepelma.com.br/Api_adv_filtering.php')
              }

              post(advertencia){
                return this.http.post<[Advertencias]>(this.url, advertencia)
              }
}
