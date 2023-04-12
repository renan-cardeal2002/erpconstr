import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { PaginacaoService } from 'src/app/services/paginacao.service';
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
  public msgExclusao: boolean = false;
  public paginaEquipe: number = 1;
  public itensPaginaEquipe: number = 10;

  constructor(
    private requisicao: RequisicaoService,
    public paginacaoService: PaginacaoService
  ) {
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
    const rota = `/cog/buscarEquipes?idEmpresa=${this.idEmpresaSelecionada}`;
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemEquipes = retorno;
        this.carregando = false;
      },
      (retorno: any) => {}
    );
  }

  async salvarEquipe(registro, modal) {
    const { idEquipe, nome, tipoInclusao } = registro;
    const rota = '/cog/salvarEquipe';
    const param = {
      idEquipe,
      nome,
      tipoInclusao,
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
    const { idEquipe } = registro;
    const rota = `/cog/excluirEquipe?idEquipe=${idEquipe}&idEmpresa=${this.idEmpresaSelecionada}`;

    try {
      await this.requisicao.delete(rota).toPromise();
      await this.buscarEquipes();
      this.fecharModal(modal);
      this.msgExclusao = true;
    } catch (erro) {}
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
