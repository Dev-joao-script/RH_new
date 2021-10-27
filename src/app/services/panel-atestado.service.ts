import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Atestados {
  seq: any;
  Codigo: any;
  Funcionario: any;
  Data_Inicio: any;
  Data_Fim: any;
  Dias: any;
  Sid: any;
  Motivo: any;
  Scan: any;
}

@Injectable({
  providedIn: 'root'
})
export class PanelAtestadoService {

  private url = "https://www.cepelma.com.br/Api_Atestados_panel.php";

  constructor(
              private http: HttpClient,
              ) { }

              getall(){
                return this.http.get<[Atestados]>(this.url)
              }

              post(Ferias){
                return this.http.post<[Atestados]>(this.url, Ferias)
              }
}
