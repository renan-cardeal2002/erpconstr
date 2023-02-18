import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';

@Component({
  selector: 'app-cadastro-compras',
  templateUrl: './cadastro-compras.component.html',
  styleUrls: ['./cadastro-compras.component.scss'],
})
export class CadastroComprasComponent implements OnInit {
  @Input() public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };

  @Input() public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de usuários',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public listagemCompras: {
    idCompra: number;
    idPessoa: number;
    descricao: string;
    previsaoEntrega: string;
    dataRecebimento: string;
    valorTotal: number;
    visualizar: boolean;
    status: string;
  }[] = [];
  public listagemProdutosCompra: any = [];
  public listagemPagamentosCompra: any = [];
  public formCadastro: any = {};
  public formExclusao: any = {};
  constructor() {}

  ngOnInit(): void {
    this.buscarCompras();
  }
  async buscarCompras() {
    this.listagemCompras.push({
      idCompra: 1,
      idPessoa: 1,
      descricao: 'Compra de materiais eletricos',
      previsaoEntrega: '25/02/2023',
      dataRecebimento: '',
      valorTotal: 200.5,
      visualizar: false,
      status: 'P',
    });
  }
  async buscarComprasProdutos(compra) {
    this.listagemProdutosCompra = [];
    this.listagemProdutosCompra.push({
      idCompra: compra.idCompra,
      idProduto: 1,
      descricaoProduto: 'Fios amarelos 0.5mm 200mt',
      qtd: 1,
      valorUnitario: 100.25,
      valorTotal: 200,
    });
  }
  async mostrarProdutosCompra(compra) {
    compra.visualizar = !compra.visualizar;
    await this.buscarComprasProdutos(compra);
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
