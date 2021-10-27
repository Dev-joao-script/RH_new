import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Contratos {
  seq: any;
  cod: any;
  Nome: any;
  Documento: any;
  scan: any;
}


@Injectable({
  providedIn: 'root'
})
export class PanelContratosService {

  private url = "https://www.cepelma.com.br/Api_Ctrts.php";

  constructor(
              private http: HttpClient,
              ) { }

              getall(){
                return this.http.get<[Contratos]>(this.url)
              }

              post(Ferias){
                return this.http.post<[Contratos]>(this.url, Ferias)
              }
}
