import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { AplicativosService } from 'src/app/services/aplicativos.services';

@Component({
  selector: 'aplicativos',
  templateUrl: './aplicativos.component.html',
  styleUrls: ['./aplicativos.component.scss'],
})
export class AplicativosComponent extends BasicModulos implements OnInit {
  public sistemas = [
    { idSistema: 'COG', nome: 'Controles Gerais' },
    { idSistema: 'CPA', nome: 'Compras' },
    { idSistema: 'FNC', nome: 'Financeiro' },
  ];

  constructor(
    private router: Router,
    private aplicativosService: AplicativosService
  ) {
    super();
  }

  ngOnInit(): void {
    this.buscarAplicacoesUsuario();
  }

  async buscarAplicacoesUsuario() {
    (await this.aplicativosService.buscarAplicacoesUsuario()).subscribe(
      (retorno: any) => {
        this.aplicativos = retorno;
      },
      (retorno) => {}
    );
  }
  async buscarSistemasUsuario() {}

  getColor(sistema: any): any {
    let colors = [
      '#535f6e',
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

    if (sistema.idSistema == 'COG') {
      return colors[0];
    }
    if (sistema.idSistema == 'CPA') {
      return colors[1];
    }
    if (sistema.idSistema == 'EST') {
      return colors[2];
    }
    if (sistema.idSistema == 'FNC') {
      return colors[3];
    }
    if (sistema.idSistema == 'FIS') {
      return colors[4];
    }
    if (sistema.idSistema == 'MKT') {
      return colors[5];
    }
    if (sistema.idSistema == 'PRO') {
      return colors[6];
    }
    if (sistema.idSistema == 'SAC') {
      return colors[7];
    }
    if (sistema.idSistema == 'SEG') {
      return colors[8];
    }
    if (sistema.idSistema == 'SRH') {
      return colors[9];
    }
    if (sistema.idSistema == 'TRP') {
      return colors[10];
    }
    if (sistema.idSistema == 'VDA') {
      return colors[11];
    }
    if (sistema.idSistema == 'WMS') {
      return colors[12];
    }
    if (sistema.idSistema == 'AJD') {
      return colors[13];
    }
  }
  selecionarSistema(sistema: any) {
    console.log(sistema);
  }
  selecionarAplicativo(aplicativo: any) {
    this.router.navigate([`/${aplicativo.idAplicacao}`]);
  }
}
