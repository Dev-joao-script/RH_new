import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Pendencia_assinatura {
  cod: any;
  Periodo: any;
  documento: any;
}

@Injectable({
  providedIn: 'root'
})
export class PendenciaPontoService {

  private url = "https://www.cepelma.com.br/api_Assinaturas_pd.php";

  constructor(
              private http: HttpClient,
              ) { }

              getall(){
                return this.http.get<[Pendencia_assinatura]>(this.url)
              }
}
