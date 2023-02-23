import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';

@Component({
  selector: 'app-cadastro-compras',
  templateUrl: './cadastro-compras.component.html',
  styleUrls: ['./cadastro-compras.component.scss'],
})
export class CadastroComprasComponent extends BasicModulos implements OnInit {
  @Input() public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };
  @Input() public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de compra',
  };
  @Input() public modalCadPgtoConfig: ModalCadastroConfig = {
    modalTitle: 'Pagamentos',
  };
  @Input() public modalCadProdutosConfig: ModalCadastroConfig = {
    modalTitle: 'Produtos',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;
  @ViewChild('modalCadastroPgto')
  private modalCadastroPgto: ModalCadastroComponent;
  @ViewChild('modalCadastroProduto')
  private modalCadastroProduto: ModalCadastroComponent;

  public listagemCompras: {
    idCompra: number;
    idPessoa: number;
    descricao: string;
    dataCompra: string;
    previsaoEntrega: string;
    dataRecebimento: string;
    valorTotal: number;
    visualizar: boolean;
    status: string;
    active?: any;
  }[] = [];
  public listagemProdutosCompra: any = [];
  public listagemPagamentosCompra: any = [];
  public formCadastro: any = {};
  public formExclusao: any = {};
  public abas = [{ nome: 'Produtos' }, { nome: 'Pagamentos' }];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.buscarCompras();
  }
  async buscarCompras() {
    this.carregando = true;
    this.listagemCompras.push({
      idCompra: 1,
      idPessoa: 1,
      descricao: 'Compra de materiais eletricos',
      dataCompra: '2023-02-18',
      previsaoEntrega: '2023-02-25',
      dataRecebimento: '',
      valorTotal: 200.5,
      visualizar: false,
      status: 'P',
    });
    this.carregando = false;
  }
  async buscarComprasProdutos(compra) {
    this.listagemProdutosCompra = [];
    this.listagemProdutosCompra.push({
      idCompra: compra.idCompra,
      idProduto: 1,
      descricaoProduto: 'Fios amarelos 0.5mm 200mt',
      qtd: 2,
      valorUnitario: 100.25,
      valorTotal: 200,
    });
  }
  async buscarComprasPagamentos(compra) {
    this.listagemPagamentosCompra = [];
    this.listagemPagamentosCompra.push({
      idCompra: compra.idCompra,
      idPagamento: 1,
      idTipoPagamento: 'PIX',
      seqPagamento: 1,
      dataPagamento: '2023-02-18',
      valorPagamento: 200.5,
      status: 'Pago',
      observacao: '',
    });
  }
  async salvarCompra() {}
  async excluirCompra() {}

  async salvarProdutoCompra() {
    return await this.modalCadastroProduto.open();
  }
  async excluirProdutoCompra() {}

  async salvarPagamentoCompra() {
    return await this.modalCadastroPgto.open();
  }
  async excluirPagamentoCompra() {}

  async mostrarProdutosCompra(compra) {
    compra.visualizar = !compra.visualizar;
    await this.buscarComprasProdutos(compra);
    await this.buscarComprasPagamentos(compra);
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
    await this.buscarComprasProdutos(registro);
    await this.buscarComprasPagamentos(registro);
    return await this.modalCadastro.open();
  }
}
