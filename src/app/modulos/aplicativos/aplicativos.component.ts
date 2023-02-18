import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aplicativos',
  templateUrl: './aplicativos.component.html',
  styleUrls: ['./aplicativos.component.scss'],
})
export class AplicativosComponent implements OnInit {
  public dragging = false;
  public carregando = false;

  public sistemas = [
    { codSistema: 'COG', nome: 'Controles Gerais' },
    { codSistema: 'CPA', nome: 'Compras' },
  ];
  public aplicativos: any = [];
  public aplicativosFavoritos = [
    {
      codSistema: 'COG',
      codAplicativo: 'CADPESSOA',
      nome: 'Cadastro de pessoas',
    },
    {
      codSistema: 'COG',
      codAplicativo: 'CADUSUARIO',
      nome: 'Cadastro de usuario',
    },
    {
      codSistema: 'COG',
      codAplicativo: 'CADTIPOPAGAMENTO',
      nome: 'Cadastro de tipo de pagamento',
    },
    {
      codSistema: 'COG',
      codAplicativo: 'CADEQUIPE',
      nome: 'Cadastro de equipe',
    },
    {
      codSistema: 'CPA',
      codAplicativo: 'CADCOMPRAS',
      nome: 'Cadastro de compras',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  getColor(sistema: any): any {
    let colors = [
      '#899DB6',
      '#0000ff8c',
      '#ffc107',
      '#FE533A',
      'purple',
      'blueviolet',
      'green',
      'tomato',
      'violet',
      'burlywood',
      'mediumseagreen',
      'chocolate',
      'darkslateblue',
      '#040404',
    ];

    if (sistema.codSistema == 'COG') {
      return colors[0];
    }
    if (sistema.codSistema == 'CPA') {
      return colors[1];
    }
    if (sistema.codSistema == 'EST') {
      return colors[2];
    }
    if (sistema.codSistema == 'FNC') {
      return colors[3];
    }
    if (sistema.codSistema == 'FIS') {
      return colors[4];
    }
    if (sistema.codSistema == 'MKT') {
      return colors[5];
    }
    if (sistema.codSistema == 'PRO') {
      return colors[6];
    }
    if (sistema.codSistema == 'SAC') {
      return colors[7];
    }
    if (sistema.codSistema == 'SEG') {
      return colors[8];
    }
    if (sistema.codSistema == 'SRH') {
      return colors[9];
    }
    if (sistema.codSistema == 'TRP') {
      return colors[10];
    }
    if (sistema.codSistema == 'VDA') {
      return colors[11];
    }
    if (sistema.codSistema == 'WMS') {
      return colors[12];
    }
    if (sistema.codSistema == 'AJD') {
      return colors[13];
    }
  }
  selecionarSistema(sistema: any) {
    console.log(sistema);
  }
  selecionarAplicativo(aplicativo: any) {
    this.router.navigate([`/${aplicativo.codAplicativo}`]);
  }
  buscarSistemas() {}
}
