import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { RequisicaoService } from 'src/app/services/requisicao.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent extends BasicModulos implements OnInit {
  public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };
  public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de usuários',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public formCadastro: any = {};
  public formExclusao: any = {};
  public formIclusaoEmpresa: any = { idEmpresa: '' };
  public formIclusaoAplicativo: any = { idAplicacao: '' };
  public listagemUsuarios: any = [];
  public listagemEmpresasUsuario: any = [];
  public listagemAplicacoesUsuario: any = [];
  public listagemEmpresas: any = [];
  public listagemAplicacoes: any = [];

  constructor(
    private requisicao: RequisicaoService,
    private toast: ToastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  mudouEmpresa(empresa) {
    this.alteraEmpresaSelecionada(empresa);
    this.buscarUsuarios();
  }

  async buscarUsuarios() {
    this.carregando = true;
    let rota = '/cog/buscarUsuarios';
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemUsuarios = retorno;
        this.carregando = false;
      },
      (retorno: any) => {}
    );
  }
  async buscarEmpresasUsuario(usuario) {
    let rota = '/cog/buscarEmpresasUsuario?idUsuario=' + usuario.idUsuario;
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemEmpresasUsuario = retorno;
      },
      (retorno: any) => {}
    );
  }
  async buscarAplicacoesUsuario(usuario) {
    let rota = '/cog/buscarAplicacoesUsuario?idUsuario=' + usuario.idUsuario;
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemAplicacoesUsuario = retorno;
      },
      (retorno: any) => {}
    );
  }
  async buscarEmpresas() {
    let rota = '/cog/buscarEmpresas';
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemEmpresas = retorno;
      },
      (retorno: any) => {}
    );
  }
  async buscarAplicacoes() {
    let rota = '/cog/buscarAplicacoes';
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemAplicacoes = retorno;
      },
      (retorno: any) => {}
    );
  }
  async salvarUsuario(registro, modal) {
    let rota = '/cog/salvarUsuario';
    let param = {
      tipoInclusao: registro.tipoInclusao,
      idUsuario: registro.idUsuario,
      login: registro.login,
      senha: registro.senha,
    };
    this.requisicao.post(rota, param).subscribe(
      async (retorno: any) => {
        await this.buscarUsuarios();
        this.fecharModal(modal);
      },
      (retorno: any) => {}
    );
  }
  async excluirUsuario(registro, modal) {
    let rota = '/cog/excluirUsuario?idUsuario=' + registro.idUsuario;
    this.requisicao.delete(rota).subscribe(
      async (retorno: any) => {
        await this.buscarUsuarios();
        this.fecharModal(modal);
      },
      (retorno: any) => {}
    );
  }

  async novoRegistro(usuario) {
    this.buscarEmpresas();
    this.listagemEmpresasUsuario.push({
      idUsuario: usuario,
      idEmpresa: '',
      editando: true,
    });
  }
  async cancelarRegistro(index) {
    this.listagemEmpresasUsuario.splice(index);
  }
  async novoRegistroAplicacao(usuario) {
    this.buscarAplicacoes();
    this.listagemAplicacoesUsuario.push({
      idUsuario: usuario,
      idAplicacao: '',
      editando: true,
    });
  }
  async cancelarRegistroAplicacao(index) {
    this.listagemAplicacoesUsuario.splice(index);
  }

  async salvarEmpresaUsuario(registro) {
    let rota = '/cog/salvarEmpresaUsuario';
    let param = {
      idUsuario: registro.idUsuario,
      idEmpresa: this.formIclusaoEmpresa.idEmpresa,
    };
    this.requisicao.post(rota, param).subscribe(
      async (retorno: any) => {
        await this.buscarEmpresasUsuario(registro);
      },
      (retorno: any) => {}
    );
  }
  async excluirEmpresaUsuario(registro) {
    let rota =
      '/cog/excluirEmpresaUsuario?idUsuarioEmpresa=' +
      registro.idUsuarioEmpresa;
    this.requisicao.delete(rota).subscribe(
      async (retorno: any) => {
        await this.buscarEmpresasUsuario(registro);
      },
      (retorno: any) => {}
    );
  }

  async salvarAplicacaoUsuario(registro) {
    let rota = '/cog/salvarAplicacaoUsuario';
    let param = {
      idUsuario: registro.idUsuario,
      idAplicacao: this.formIclusaoAplicativo.idAplicacao,
    };
    this.requisicao.post(rota, param).subscribe(
      async (retorno: any) => {
        await this.buscarAplicacoesUsuario(registro);
      },
      (retorno: any) => {}
    );
  }
  async excluirAplicacaoUsuario(registro) {
    let rota =
      '/cog/excluirAplicacaoUsuario?idUsuarioAplicacao=' +
      registro.idUsuarioAplicacao;
    this.requisicao.delete(rota).subscribe(
      async (retorno: any) => {
        await this.buscarAplicacoesUsuario(registro);
      },
      (retorno: any) => {}
    );
  }

  async mostrarModalExclusao(param) {
    this.formExclusao = param;
    return await this.modalExclusao.open();
  }
  async mostrarModalCadastro() {
    this.listagemEmpresasUsuario = [];
    this.formCadastro = {};
    this.formCadastro.tipoInclusao = 'I';
    return await this.modalCadastro.open();
  }
  async mostrarModalEdicao(registro) {
    this.listagemEmpresasUsuario = [];
    this.formCadastro = registro;
    this.formCadastro.tipoInclusao = 'E';
    this.buscarEmpresasUsuario(registro);
    this.buscarAplicacoesUsuario(registro);
    return await this.modalCadastro.open();
  }
}
