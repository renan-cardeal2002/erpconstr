import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoaComponent } from './modulos/cog/cadastro-pessoa/cadastro-pessoa.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
