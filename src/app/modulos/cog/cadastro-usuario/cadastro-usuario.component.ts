import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { AplicativosService } from 'src/app/services/aplicativos.services';
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
  public listagemEmpresasUsuario: any = [];
  public listagemAplicacoesUsuario: any = [];
  public listagemEmpresas: any = [];
  public listagemAplicacoes: any = [];

  constructor(
    private requisicao: RequisicaoService,
    private aplicativosService: AplicativosService
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
  async buscarEmpresasUsuario(usuario) {
    let rota = `/cog/buscarEmpresasUsuario?idUsuario=${usuario.idUsuario}`;
    this.listagemEmpresasUsuario = await this.requisicao.get(rota).toPromise();
  }
  async buscarAplicacoesUsuario(usuario) {
    this.listagemAplicacoesUsuario = await this.aplicativosService
      .buscarAplicacoesUsuario(undefined, usuario.idUsuario, true)
      .toPromise();
  }
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
    };
    console.log(this.formCadastro);
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
    await this.buscarAplicacoes();
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
    const rota = '/cog/salvarEmpresaUsuario';
    const param = {
      idUsuario: registro.idUsuario,
      idEmpresa: this.formIclusaoEmpresa.idEmpresa,
    };
    await this.requisicao.post(rota, param).toPromise();
    await this.buscarEmpresasUsuario(registro);
  }
  async excluirEmpresaUsuario(registro) {
    const rota =
      '/cog/excluirEmpresaUsuario?idUsuarioEmpresa=' +
      registro.idUsuarioEmpresa;
    await this.requisicao.delete(rota).toPromise();
    await this.buscarEmpresasUsuario(registro);
  }

  async salvarAplicacaoUsuario(registro) {
    const rota = '/cog/salvarAplicacaoUsuario';
    const param = {
      idUsuario: registro.idUsuario,
      idAplicacao: this.formIclusaoAplicativo.idAplicacao,
      idEmpresa: this.listagemEmpresasUsuario[0].idEmpresa,
    };
    await this.requisicao.post(rota, param).toPromise();
    await this.buscarAplicacoesUsuario(registro);
  }
  async excluirAplicacaoUsuario(registro) {
    const rota =
      '/cog/excluirAplicacaoUsuario?idUsuarioAplicacao=' +
      registro.idUsuarioAplicacao;
    await this.requisicao.delete(rota).toPromise();
    await this.buscarAplicacoesUsuario(registro);
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
    this.formCadastro.idUsuario = registro.idUsuario
      ? registro.idUsuario
      : registro._id;
    this.formCadastro.tipoInclusao = 'E';
    await this.buscarEmpresasUsuario(registro);
    await this.buscarAplicacoesUsuario(registro);
    return await this.modalCadastro.open();
  }
}
