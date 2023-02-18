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

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AplicativosComponent,
    DashboardComponent,
    CadastroPessoaComponent,
    CadastroUsuarioComponent,
  ],
  imports: [CommonModule, ComponentesModule, FormsModule, NgbModule],
})
export class ModulosModule {}
