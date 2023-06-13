import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { ModalCadastroComponent } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.component';
import { ModalCadastroConfig } from 'src/app/componentes/modais/modal-cadastro/modal-cadastro.config';
import { ModalExclusaoComponent } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.component';
import { ModalExclusaoConfig } from 'src/app/componentes/modais/modal-exclusao/modal-exclusao.config';
import { ModalMensagemComponent } from 'src/app/componentes/modais/modal-mensagem/modal-mensagem.component';
import { ModalMensagemConfig } from 'src/app/componentes/modais/modal-mensagem/modal-mensagem.config';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss'],
})
export class CadastroPessoaComponent extends BasicModulos implements OnInit {
  public modalExcConfig: ModalExclusaoConfig = {
    modalTitle: 'Atenção',
  };
  public modalMsgConfig: ModalMensagemConfig = {
    modalTitle: 'Atenção',
    dismissButtonLabel: '',
    closeButtonLabel: 'OK',
  };
  public modalCadConfig: ModalCadastroConfig = {
    modalTitle: 'Cadastro de pessoas',
  };
  @ViewChild('modalExclusao') public modalExclusao: ModalExclusaoComponent;
  @ViewChild('modalMensagem') private modalMensagem: ModalMensagemComponent;
  @ViewChild('modalCadastro') private modalCadastro: ModalCadastroComponent;

  public mensagem: string;
  public formExclusao: any;
  public formCadastro: any;
  public listagemPessoas: {
    idPessoa: number;
    cnpjCpf: number;
    nome: string;
    tipoPessoa: string;
    situacao: string;
  }[] = [];
  public listagemEquipes: any = [];

  constructor(private requisicao: RequisicaoService) {
    super();
  }
  async ngOnInit(): Promise<void> {
    await this.buscarPessoas();
  }

  mudouEmpresa(empresa) {
    this.alteraEmpresaSelecionada(empresa);
    this.buscarPessoas();
  }

  async buscarPessoas() {
    this.carregando = true;
    const rota = '/cog/buscarPessoas';
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemPessoas = retorno;
        console.log(retorno);
        this.carregando = false;
      },
      (retorno: any) => {}
    );
  }
  async buscarEquipes() {
    let rota = '/cog/buscarEquipes?idEmpresa=' + this.idEmpresaSelecionada;
    try {
      this.listagemEquipes = await this.requisicao.get(rota).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  async salvarPessoa(registro, modal) {
    let rota = '/cog/salvarPessoa';
    let param = {
      idPessoa: registro._id,
      tipoInclusao: registro.tipoInclusao,
      nome: registro.nome,
      cnpjCpf: registro.cnpjCpf,
      tipoPessoa: registro.tipoPessoa,
      inscricaoEstadual: registro.inscricaoEstadual,
      rg: registro.rg,
      inscricaoMunicipal: registro.inscricaoMunicipal,
      situacao: registro.situacao,
      flagFuncionario: registro.flagFuncionario,
      flagCliente: registro.flagCliente,
      flagFornecedor: registro.flagFornecedor,
      tipoFuncionario: registro.tipoFuncionario,
      equipe: registro.equipe,
    };

    try {
      await this.requisicao.post(rota, param).toPromise();
      await this.buscarPessoas();
      this.fecharModal(modal);
    } catch (error) {
      console.log(error);
    }
  }
  async excluirPessoa(registro, modal) {
    let rota = '/cog/excluirPessoa?idPessoa=' + registro._id;

    this.requisicao.delete(rota).subscribe(
      async (retorno: any) => {
        await this.buscarPessoas();
        this.fecharModal(modal);
      },
      (retorno: any) => {}
    );
  }

  async mostraModalMensagem(param) {
    this.mensagem = param;
    return await this.modalMensagem.open();
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
    await this.buscarEquipes();
    return await this.modalCadastro.open();
  }
  async mostrarModalEdicao(registro) {
    this.formCadastro = { ...registro };
    this.formCadastro.idPessoa = registro._id;
    this.formCadastro.tipoInclusao = 'E';
    await this.buscarEquipes();
    return await this.modalCadastro.open();
  }
}
