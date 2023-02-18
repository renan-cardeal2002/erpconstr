import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEquipeComponent } from './modulos/cog/cadastro-equipe/cadastro-equipe.component';
import { CadastroPessoaComponent } from './modulos/cog/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroTipoPagamentoComponent } from './modulos/cog/cadastro-tipo-pagamento/cadastro-tipo-pagamento.component';
import { CadastroUsuarioComponent } from './modulos/cog/cadastro-usuario/cadastro-usuario.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
