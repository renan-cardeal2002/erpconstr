import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEmpresasComponent } from './modulos/cog/cadastro-empresas/cadastro-empresas.component';
import { CadastroEquipeComponent } from './modulos/cog/cadastro-equipe/cadastro-equipe.component';
import { CadastroPessoaComponent } from './modulos/cog/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroProdutosComponent } from './modulos/cog/cadastro-produtos/cadastro-produtos.component';
import { CadastroTipoPagamentoComponent } from './modulos/cog/cadastro-tipo-pagamento/cadastro-tipo-pagamento.component';
import { CadastroUsuarioComponent } from './modulos/cog/cadastro-usuario/cadastro-usuario.component';
import { CadastroComprasComponent } from './modulos/cpa/cadastro-compras/cadastro-compras.component';
import { HomeComponent } from './modulos/home/home.component';
import { LoginComponent } from './modulos/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'CADPESSOA',
    component: CadastroPessoaComponent,
  },
  {
    path: 'CADUSUARIO',
    component: CadastroUsuarioComponent,
  },
  {
    path: 'CADTIPOPAGAMENTO',
    component: CadastroTipoPagamentoComponent,
  },
  {
    path: 'CADEQUIPE',
    component: CadastroEquipeComponent,
  },
  {
    path: 'CADCOMPRAS',
    component: CadastroComprasComponent,
  },
  {
    path: 'CADPRODUTO',
    component: CadastroProdutosComponent,
  },
  {
    path: 'CADEMPRESA',
    component: CadastroEmpresasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
