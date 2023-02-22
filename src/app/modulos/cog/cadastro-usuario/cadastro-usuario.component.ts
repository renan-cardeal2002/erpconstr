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
  public listagemUsuarios: any = [];
  public listagemEmpresasUsuario: any = [];

  constructor(
    private requisicao: RequisicaoService,
    private toast: ToastService
  ) {
    super();
  }

  ngOnInit(): void {
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
  async salvarUsuario() {}
  async excluirUsuario() {}

  async salvarEmpresaUsuario() {}
  async excluirEmpresaUsuario() {}

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
    return await this.modalCadastro.open();
  }
}
