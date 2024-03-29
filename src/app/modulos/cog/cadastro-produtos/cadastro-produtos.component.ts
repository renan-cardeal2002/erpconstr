import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss'],
})
export class CadastroProdutosComponent extends BasicModulos implements OnInit {
  public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };
  public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de produtos',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public formCadastro: any;
  public formExclusao: any;
  public listagemProdutos: any = [];

  constructor(private requisicao: RequisicaoService) {
    super();
  }

  ngOnInit(): void {
    this.buscarProdutos();
  }

  mudouEmpresa(empresa) {
    this.alteraEmpresaSelecionada(empresa);
    this.buscarProdutos();
  }

  async buscarProdutos() {
    this.carregando = true;
    const rota = `/cog/buscarProdutos?idEmpresa=${this.idEmpresaSelecionada}`;
    this.listagemProdutos = await this.requisicao.get(rota).toPromise();
    this.carregando = false;
  }
  async salvarProduto(registro, modal) {
    const rota = '/cog/salvarProduto';
    const param = {
      tipoInclusao: registro.tipoInclusao,
      idProduto: registro.idProduto,
      idEmpresa: this.idEmpresaSelecionada,
      descricao: registro.descricaoProduto,
      situacao: registro.situacao,
    };
    await this.requisicao.post(rota, param).toPromise();
    await this.buscarProdutos();
    this.fecharModal(modal);
  }
  async excluirProduto({ idProduto }, modal) {
    const rota = `/cog/excluirProduto?idProduto=${idProduto}&idEmpresa=${this.idEmpresaSelecionada}`;
    await this.requisicao.delete(rota).toPromise();
    await this.buscarProdutos();
    this.fecharModal(modal);
  }

  async mostrarModalExclusao(param) {
    this.formExclusao = param;
    return await this.modalExclusao.open();
  }
  async mostrarModalCadastro() {
    this.formCadastro = {};
    this.formCadastro.tipoInclusao = 'I';
    this.formCadastro.situacao = 'A';
    return await this.modalCadastro.open();
  }
  async mostrarModalEdicao(registro) {
    this.formCadastro = registro;
    this.formCadastro.tipoInclusao = 'E';
    return await this.modalCadastro.open();
  }
}
