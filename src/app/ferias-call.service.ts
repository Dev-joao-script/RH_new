import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Avisos_ferias {
  seq: any;
  Codigo: any;
  Funcionario: any;
  Inicio_perioro: any;
  Termino_periodo: any;
  Retorno: any;
  Tipo_Ferias: any;
  Dias: any;
  Aviso_de_Ferias: any;
  Recibo_de_Ferias: any;
}

@Injectable({
  providedIn: 'root'
})
export class FeriasCallService {

  private url = "https://www.cepelma.com.br/api_ferias.php";

  constructor(
              private http: HttpClient,
              ) { }

              getall(){
                return this.http.get<[Avisos_ferias]>(this.url)
              }

              post(Ferias){
                return this.http.post<[Avisos_ferias]>(this.url, Ferias)
              }
}
