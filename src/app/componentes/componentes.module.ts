import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './tabs/tabs.component';
import { TablePadraoDirective } from '../directives/table-padrao.directive';
import { TheadPadraoDirective } from '../directives/thead-padrao.directive';
import { BotaoAdicionarComponent } from './botoes/botao-adicionar/botao-adicionar.component';
import { BotaoExcluirComponent } from './botoes/botao-excluir/botao-excluir.component';
import { BotaoEditarComponent } from './botoes/botao-editar/botao-editar.component';
import { ModalCadastroComponent } from './modais/modal-cadastro/modal-cadastro.component';
import { ModalExclusaoComponent } from './modais/modal-exclusao/modal-exclusao.component';
import { ModalMensagemComponent } from './modais/modal-mensagem/modal-mensagem.component';
import { BotaoPrimarioComponent } from './botoes/botao-primario/botao-primario.component';
import { BotaoCloseComponent } from './botoes/botao-close/botao-close.component';
import { BotaoConfirmarComponent } from './botoes/botao-confirmar/botao-confirmar.component';
import { BotaoCancelarComponent } from './botoes/botao-cancelar/botao-cancelar.component';
import { BotaoVisualizarComponent } from './botoes/botao-visualizar/botao-visualizar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    TablePadraoDirective,
    TheadPadraoDirective,
    BotaoAdicionarComponent,
    BotaoExcluirComponent,
    BotaoEditarComponent,
    ModalCadastroComponent,
    ModalExclusaoComponent,
    ModalMensagemComponent,
    BotaoPrimarioComponent,
    BotaoCloseComponent,
    BotaoConfirmarComponent,
    BotaoCancelarComponent,
    BotaoVisualizarComponent,
  ],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [
    HeaderComponent,
    TabsComponent,
    TablePadraoDirective,
    TheadPadraoDirective,
    BotaoAdicionarComponent,
    BotaoExcluirComponent,
    BotaoEditarComponent,
    ModalCadastroComponent,
    ModalExclusaoComponent,
    ModalMensagemComponent,
    BotaoPrimarioComponent,
    BotaoCloseComponent,
    BotaoConfirmarComponent,
    BotaoCancelarComponent,
    BotaoVisualizarComponent,
  ],
})
export class ComponentesModule {}
