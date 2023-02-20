import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';

import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-cadastro-tipo-pagamento',
  templateUrl: './cadastro-tipo-pagamento.component.html',
  styleUrls: ['./cadastro-tipo-pagamento.component.scss'],
})
export class CadastroTipoPagamentoComponent
  extends BasicModulos
  implements OnInit
{
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

  constructor(private requisicao: RequisicaoService) {
    super();
  }

  ngOnInit(): void {
    this.buscarTiposPagamento();
  }
  async buscarTiposPagamento() {
    let rota = '/cog/buscarTiposPagamento';
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemTiposPagamento = retorno;
      },
      (retorno: any) => {}
    );
  }

  async salvarTiposPagamento(registro, modal) {
    let rota = '/cog/salvarTiposPagamento';
    let param = {
      idTipoPagamento: registro.idTipoPagamento,
      tipoPagamento: registro.tipoPagamento,
      tipoInclusao: registro.tipoInclusao,
    };
    this.requisicao.post(rota, param).subscribe(
      async (retorno: any) => {
        await this.buscarTiposPagamento();
        this.fecharModal(modal);
      },
      (retorno: any) => {}
    );
  }
  async excluirTiposPagamento(registro, modal) {
    let rota =
      '/cog/excluirTiposPagamento?idTipoPagamento=' + registro.idTipoPagamento;
    this.requisicao.delete(rota).subscribe(
      async (retorno: any) => {
        await this.buscarTiposPagamento();
        this.fecharModal(modal);
      },
      (retorno: any) => {}
    );
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
