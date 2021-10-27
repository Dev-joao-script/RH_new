import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/internal/Observable';

export interface datachartservice{
  Radial: any,
  Advertencia: any,
  Atrasos: any,
  Faltas: any,
  Sem_Batidas: any,
  AnoAtual: any,
  AnoAnterior: any,
};


@Injectable({
  providedIn: 'root'
})
export class GestalService {

  private url = "https://www.cepelma.com.br/Api_gestal.php";

  constructor(
              private http: HttpClient,
              ) { }

              get(anoAnterior,anoAtual,Data,Tv,Uv):Observable<any>{
                return this.http.get<datachartservice[]>(this.url+'?AnoAnt=' + anoAnterior + '&AnoAtu='+ anoAtual + '&Data='+ Data + '&TAnoAtu='+ Tv + '&TAnoAnt='+ Uv) 
              }

}


