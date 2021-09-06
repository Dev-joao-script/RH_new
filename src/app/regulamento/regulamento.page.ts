import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulamento',
  templateUrl: './regulamento.page.html',
  styleUrls: ['./regulamento.page.scss'],
})
export class RegulamentoPage implements OnInit {

  routerHome: string;

  constructor(
    private location: Location,
    public router: Router,
  ) { }

  ngOnInit() {
    this.routerHome = this.router.url;

  }
  Back(): void {
    this.location.back()
  }

  go1(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['anexo1/' + Url]);
  }
  go2(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['anexo2/' + Url]);
  }
  go3(){
    const datasource = this.router.url;
    console.log(datasource);
    const fn = datasource.split("/");
    let Url = fn[2];
    Url = decodeURI(Url);
    Url = decodeURIComponent(Url);
    this.router.navigate(['anexo3/' + Url]);
  }
}
