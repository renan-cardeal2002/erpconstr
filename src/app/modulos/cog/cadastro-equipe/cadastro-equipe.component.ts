import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';

@Component({
  selector: 'app-cadastro-equipe',
  templateUrl: './cadastro-equipe.component.html',
  styleUrls: ['./cadastro-equipe.component.scss'],
})
export class CadastroEquipeComponent implements OnInit {
  @Input() public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };

  @Input() public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de equipe',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public listagemEquipes: { idEquipe: number; nome: string }[] = [];
  public formCadastro: any = {};
  public formExclusao: any = {};

  constructor() {}

  ngOnInit(): void {
    this.buscarEquipes();
  }
  async buscarEquipes() {
    this.listagemEquipes.push({ idEquipe: 1, nome: 'Equipe amarela' });
    this.listagemEquipes.push({ idEquipe: 2, nome: 'Equipe verde' });
    this.listagemEquipes.push({ idEquipe: 3, nome: 'Equipe azul' });
  }

  async mostrarModalExclusao(param) {
    this.formExclusao = param;
    return await this.modalExclusao.open();
  }
  async mostrarModalCadastro() {
    this.formCadastro = {};
    this.formCadastro.tipoInclusao = 'I';
    return await this.modalCadastro.open();
  }
  async mostrarModalEdicao(registro) {
    this.formCadastro = registro;
    this.formCadastro.tipoInclusao = 'E';
    return await this.modalCadastro.open();
  }
}
