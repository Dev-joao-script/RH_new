import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Procedimentos {
  seq: string;
  Data: string;
  Titulo: string;
  Procedimento: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProcedimentosService {

    private url = "https://www.cepelma.com.br/Api_procedimentos.php";

    constructor(
    private http: HttpClient,
  ) { }

  getAll(){
    return this.http.get<[Procedimentos]>(this.url);
  }

  get(seq: string){
    return this.http.get<[Procedimentos]>(this.url + '?cod=' + seq);
  }

  create(Procedimentos: Procedimentos){
    return this.http.post<[Procedimentos]>(this.url, Procedimentos);
  }


  update(Procedimentos: Procedimentos, seq: string){
    return this.http.put<[Procedimentos]>(this.url + '?seq=' + seq, Procedimentos);
  }

  delete(seq: string){
    return this.http.delete<[Procedimentos]>(this.url + '?seq=' + seq);
  }

}
