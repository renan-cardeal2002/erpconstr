import { Component, OnInit } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BasicModulos implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

  async mudouEmpresa(empresa) {
    this.alteraEmpresaSelecionada(empresa);
    this.aplicativos = window.localStorage.getItem('aplicacoes');
  }
}
