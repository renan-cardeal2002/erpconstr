import { Component, OnInit } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { AplicativosService } from 'src/app/services/aplicativos.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BasicModulos implements OnInit {
  constructor(private aplicativosService: AplicativosService) {
    super();
  }

  ngOnInit(): void {}

  async mudouEmpresa(empresa) {
    this.alteraEmpresaSelecionada(empresa);
  }
}
