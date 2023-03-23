import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-cadastro-equipe',
  templateUrl: './cadastro-equipe.component.html',
  styleUrls: ['./cadastro-equipe.component.scss'],
})
export class CadastroEquipeComponent extends BasicModulos implements OnInit {
  public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };
  public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de equipe',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public listagemEquipes: { idEquipe: number; nome: string }[] = [];
  public formCadastro: any = {};
  public formExclusao: any = {};
  public msgExclusao = false;
  public paginaEquipe = 1;
  public itensPaginaEquipe = 10;

  constructor(private requisicao: RequisicaoService) {
    super();
  }

  ngOnInit(): void {
    this.buscarEquipes();
  }

  mudouEmpresa(empresa) {
    this.alteraEmpresaSelecionada(empresa);
    this.buscarEquipes();
  }

  async buscarEquipes() {
    this.carregando = true;
    let rota = '/cog/buscarEquipes?idEmpresa=' + this.idEmpresaSelecionada;
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemEquipes = retorno;
        this.carregando = false;
      },
      (retorno: any) => {}
    );
  }

  async salvarEquipe(registro, modal) {
    let rota = '/cog/salvarEquipe';
    let param = {
      idEquipe: registro.idEquipe,
      nome: registro.nome,
      tipoInclusao: registro.tipoInclusao,
      idEmpresa: this.idEmpresaSelecionada,
    };

    this.requisicao.post(rota, param).subscribe(
      async (retorno: any) => {
        await this.buscarEquipes();
        this.fecharModal(modal);
      },
      (retorno: any) => {}
    );
  }
  async excluirEquipe(registro, modal) {
    let rota =
      '/cog/excluirEquipe?idEquipe=' +
      registro.idEquipe +
      '&idEmpresa=' +
      this.idEmpresaSelecionada;

    this.requisicao.delete(rota).subscribe(
      async (retorno: any) => {
        await this.buscarEquipes();
        this.fecharModal(modal);
        this.msgExclusao = true;
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
