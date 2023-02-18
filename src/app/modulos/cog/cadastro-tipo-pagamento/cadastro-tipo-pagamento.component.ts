import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';

@Component({
  selector: 'app-cadastro-tipo-pagamento',
  templateUrl: './cadastro-tipo-pagamento.component.html',
  styleUrls: ['./cadastro-tipo-pagamento.component.scss'],
})
export class CadastroTipoPagamentoComponent implements OnInit {
  @Input() public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };

  @Input() public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de equipe',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public listagemTiposPagamento: {
    idTipoPagamento: string;
    tipoPagamento: string;
  }[] = [];
  public formCadastro: any = {};
  public formExclusao: any = {};

  constructor() {}

  ngOnInit(): void {
    this.buscarTiposPagamento();
  }
  async buscarTiposPagamento() {
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'PIX',
      tipoPagamento: 'PIX',
    });
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'TED',
      tipoPagamento: 'Transferência bancária',
    });
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'CH',
      tipoPagamento: 'CHEQUE',
    });
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'PIX',
      tipoPagamento: 'PIX',
    });
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
