import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-cadastro-empresas',
  templateUrl: './cadastro-empresas.component.html',
  styleUrls: ['./cadastro-empresas.component.scss'],
})
export class CadastroEmpresasComponent extends BasicModulos implements OnInit {
  public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };
  public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de pessoas',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public formExclusao: any;
  public formCadastro: any;
  public listagemEmpresas: any = [];

  constructor(private requisicao: RequisicaoService) {
    super();
  }

  ngOnInit(): void {
    this.buscarEmpresas();
  }

  async buscarEmpresas() {
    this.carregando = true;
    let rota = '/cog/buscarEmpresas';
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemEmpresas = retorno;
        this.carregando = false;
      },
      (retorno: any) => {}
    );
  }
  async salvarEmpresa(registro, modal) {
    let rota = '/cog/salvarEmpresa';
    let param = {
      idEmpresa: registro.idEmpresa,
      tipoInclusao: registro.tipoInclusao,
      nome: registro.nome,
      cnpjCpf: registro.cnpjCpf,
      tipoPessoa: registro.tipoPessoa,
      inscricaoEstadual: registro.inscricaoEstadual,
      inscricaoMunicipal: registro.inscricaoMunicipal,
    };

    this.requisicao.post(rota, param).subscribe(
      async (retorno: any) => {
        await this.buscarEmpresas();
        this.fecharModal(modal);
      },
      (retorno: any) => {}
    );
  }
  async excluirEmpresa(registro, modal) {
    let rota = '/cog/excluirEmpresa?idEmpresa=' + registro.idEmpresa;
    this.requisicao.delete(rota).subscribe(
      async (retorno: any) => {
        await this.buscarEmpresas();
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
    this.formCadastro.situacao = 'A';
    this.formCadastro.tipoPessoa = 'J';
    this.buscarEmpresas();
    return await this.modalCadastro.open();
  }
  async mostrarModalEdicao(registro) {
    this.formCadastro = registro;
    this.formCadastro.tipoInclusao = 'E';
    this.buscarEmpresas();
    return await this.modalCadastro.open();
  }
}
