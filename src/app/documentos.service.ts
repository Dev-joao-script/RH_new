import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Documentos {
  seq: any;
  cod: any;
  Documento: any;
  scan: any;
}


@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private url = "https://www.cepelma.com.br/Up_docs_api.php";

  constructor(
    private http: HttpClient,
  ) { }

  getall() {
    return this.http.get<[Documentos]>(this.url)
  }

  post(Ferias) {
    return this.http.post<[Documentos]>(this.url, Ferias)
  }
}
