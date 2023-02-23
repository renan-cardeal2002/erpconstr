import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AplicativosComponent } from './aplicativos/aplicativos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroPessoaComponent } from './cog/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroUsuarioComponent } from './cog/cadastro-usuario/cadastro-usuario.component';
import { CadastroEquipeComponent } from './cog/cadastro-equipe/cadastro-equipe.component';
import { CadastroTipoPagamentoComponent } from './cog/cadastro-tipo-pagamento/cadastro-tipo-pagamento.component';
import { CadastroComprasComponent } from './cpa/cadastro-compras/cadastro-compras.component';
import { CadastroProdutosComponent } from './cog/cadastro-produtos/cadastro-produtos.component';
import { CadastroEmpresasComponent } from './cog/cadastro-empresas/cadastro-empresas.component';
import { MySqlComponent } from './cog/my-sql/my-sql.component';
import { CadastroAplicacaoComponent } from './cog/cadastro-aplicacao/cadastro-aplicacao.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AplicativosComponent,
    DashboardComponent,
    CadastroPessoaComponent,
    CadastroUsuarioComponent,
    CadastroEquipeComponent,
    CadastroTipoPagamentoComponent,
    CadastroComprasComponent,
    CadastroProdutosComponent,
    CadastroEmpresasComponent,
    MySqlComponent,
    CadastroAplicacaoComponent,
  ],
  imports: [CommonModule, ComponentesModule, FormsModule, NgbModule],
})
export class ModulosModule {}
