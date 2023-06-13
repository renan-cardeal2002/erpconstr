import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
// import { AplicativosService } from 'src/app/services/aplicativos.services';
import { RequisicaoService } from 'src/app/services/requisicao.service';
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
  public listagemEmpresas: any = [];
  public listagemAplicacoes: any = [];

  public addEmpresa = false;

  constructor(
    private requisicao: RequisicaoService // private aplicativosService: AplicativosService
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
    const rota = '/cog/buscarUsuarios';
    this.listagemUsuarios = await this.requisicao.get(rota).toPromise();
    this.carregando = false;
  }
  // async buscarEmpresasUsuario(usuario) {
  //   let rota = `/cog/buscarEmpresasUsuario?idUsuario=${usuario.idUsuario}`;
  //   this.listagemEmpresasUsuario = await this.requisicao.get(rota).toPromise();
  // }
  // async buscarAplicacoesUsuario(usuario) {
  //   this.listagemAplicacoesUsuario = await this.aplicativosService
  //     .buscarAplicacoesUsuario(undefined, usuario.idUsuario, true)
  //     .toPromise();
  // }
  async buscarEmpresas() {
    const rota = '/cog/buscarEmpresas';
    this.listagemEmpresas = await this.requisicao.get(rota).toPromise();
  }
  async buscarAplicacoes() {
    const rota = '/cog/buscarAplicacoes';
    this.listagemAplicacoes = await this.requisicao.get(rota).toPromise();
  }
  async salvarUsuario(registro, modal) {
    const rota = '/cog/salvarUsuario';
    const param = {
      tipoInclusao: registro.tipoInclusao,
      idUsuario: registro.idUsuario,
      login: registro.login,
      senha: registro.senha,
      empresas: registro.empresas,
      aplicacoes: registro.aplicacoes,
    };
    await this.requisicao.post(rota, param).toPromise();
    await this.buscarUsuarios();
    this.fecharModal(modal);
  }
  async excluirUsuario(registro, modal) {
    const rota = '/cog/excluirUsuario?idUsuario=' + registro.idUsuario;
    await this.requisicao.delete(rota).toPromise();
    await this.buscarUsuarios();
    this.fecharModal(modal);
  }

  async novoRegistro(usuario) {
    await this.buscarEmpresas();
    this.formCadastro.empresas.push({
      idUsuario: usuario,
      idEmpresa: '',
      editando: true,
    });
  }
  async cancelarRegistro(index) {
    this.formCadastro.empresas.splice(index, 1);
  }
  async novoRegistroAplicacao(usuario) {
    await this.buscarAplicacoes();
    this.formCadastro.aplicacoes.push({
      idUsuario: usuario,
      idAplicacao: '',
      editando: true,
    });
  }
  async cancelarRegistroAplicacao(index) {
    this.formCadastro.aplicacoes.splice(index, 1);
  }

  async salvarEmpresaUsuario(registro, index) {
    this.formCadastro.empresas[index] = {
      idUsuario: registro.idUsuario,
      ...this.formIclusaoEmpresa.empresa,
      editando: false,
    };
  }
  async excluirEmpresaUsuario(index) {
    this.formCadastro.empresas.splice(index, 1);
  }

  async salvarAplicacaoUsuario(registro, index) {
    this.formCadastro.aplicacoes[index] = {
      idUsuario: registro.idUsuario,
      ...this.formIclusaoAplicativo.aplicacao,
      idEmpresa: this.formCadastro.empresas[0].idEmpresa,
      editando: false,
    };
  }
  async excluirAplicacaoUsuario(index) {
    this.formCadastro.aplicacoes.splice(index, 1);
  }

  async mostrarModalExclusao(param) {
    this.formExclusao = param;
    return await this.modalExclusao.open();
  }
  async mostrarModalCadastro() {
    this.formCadastro = {};
    this.formCadastro.empresas = [];
    this.formCadastro.aplicacoes = [];
    this.formCadastro.tipoInclusao = 'I';
    return await this.modalCadastro.open();
  }
  async mostrarModalEdicao(registro) {
    this.formCadastro = registro;
    this.formCadastro.idUsuario = registro.idUsuario
      ? registro.idUsuario
      : registro._id;
    this.formCadastro.tipoInclusao = 'E';

    return await this.modalCadastro.open();
  }
}
