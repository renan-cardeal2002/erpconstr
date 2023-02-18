import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { ModalMensagemComponent } from 'src/app/componentes/modais/modal-mensagem/modal-mensagem.component';
import { ModalMensagemConfig } from 'src/app/componentes/modais/modal-mensagem/modal-mensagem.config';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss'],
})
export class CadastroPessoaComponent extends BasicModulos implements OnInit {
  @Input() public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };

  @Input() public modalMsgConfig: ModalMensagemConfig = {
    modalTitle: 'Atenção',
    dismissButtonLabel: '',
    closeButtonLabel: 'OK',
  };

  @Input() public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de pessoas',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalMensagem') private modalMensagem: ModalMensagemComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public mensagem: string;
  public formExclusao: string;
  public formCadastro: any;
  public listagemPessoas: { idPessoa: number; nome: string }[] = [];

  constructor() {
    super();
  }
  async ngOnInit(): Promise<void> {
    await this.buscarPessoas();
  }

  async buscarPessoas() {
    this.carregando = true;
    this.listagemPessoas.push({ idPessoa: 1, nome: 'Renan' });
    console.log('buscou');
    this.carregando = false;
  }

  async mostraModalMensagem(param) {
    this.mensagem = param;
    return await this.modalMensagem.open();
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
