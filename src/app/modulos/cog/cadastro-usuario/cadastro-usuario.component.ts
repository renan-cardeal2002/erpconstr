import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent extends BasicModulos implements OnInit {
  @Input() public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };

  @Input() public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de usuários',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public formCadastro: any = {};
  public formExclusao: any = {};
  public listagemUsuarios: any = [];
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.buscarPessoas();
  }

  async buscarPessoas() {
    this.carregando = true;
    this.listagemUsuarios.push({ idUsuario: 1, login: 'Renan', senha: '123' });
    console.log('buscou');
    this.carregando = false;
  }

  async mostrarModalExclusao(param) {
    this.formExclusao = param;
    return await this.modalExclusao.open();
  }
  async mostrarModalCadastro() {
    this.formCadastro = {};
    return await this.modalCadastro.open();
  }
  async mostrarModalEdicao(registro) {
    this.formCadastro = registro;
    return await this.modalCadastro.open();
  }
}
