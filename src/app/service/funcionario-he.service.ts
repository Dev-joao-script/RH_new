import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface datachartservice {
  Funcionarios: any,
  scan: any,
  cracha: any,
  horas: any,
  evento: any,
};


@Injectable({
  providedIn: 'root'
})
export class FuncionarioHeService {

  private url = "http://www.cepelma.com.br/Totalizadores.php?Periodo=2021-08";

  constructor(
    private http: HttpClient,
  ) { }

  get(): Observable<any> {
    return this.http.get<datachartservice[]>(this.url)
  }

  gether(Periodo: any): Observable<any> {
    return this.http.get<datachartservice[]>("http://www.cepelma.com.br/Totalizadores.php?Periodo=" + Periodo)
  }

  getting(Periodo: any): Observable<any> {
    return this.http.get<datachartservice[]>("http://www.cepelma.com.br/Totalizadores_bh.php?Periodo=" + Periodo)
  }

  getAll(): Observable<any> {
    return this.http.get<datachartservice[]>("http://www.cepelma.com.br/Totalizadores_bh.php")
  }
}


