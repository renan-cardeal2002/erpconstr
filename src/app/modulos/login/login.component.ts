import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: any = { usuario: '', senha: '' };
  public empresasUsuario = [];
  constructor(private router: Router, private requisicao: RequisicaoService) {}

  ngOnInit(): void {}

  async logar(login: any) {
    let rota = '/cog/login?login=' + login.usuario + '&senha=' + login.senha;

    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        try {
          console.log(retorno.dadosLogin.aplicacoes);
          window.localStorage.setItem('idUsuario', retorno.dadosLogin._id);
          window.localStorage.setItem('usuario', retorno.dadosLogin.login);
          window.localStorage.setItem(
            'aplicacoes',
            JSON.stringify(retorno.dadosLogin.aplicacoes)
          );
          window.localStorage.setItem(
            'empresas',
            JSON.stringify(retorno.dadosLogin.empresas)
          );

          this.empresasUsuario = retorno.dadosLogin.empresas;

          if (this.empresasUsuario.length > 0) {
            this.selecionarEmpresa(retorno.dadosLogin.empresas[0]);
          } else {
            this.selecionarEmpresa('');
          }

          this.router.navigate(['/home']);
        } catch (err) {}
      },
      (retorno: any) => {
        console.log(retorno);
      }
    );
  }
  async selecionarEmpresa(empresa) {
    window.localStorage.setItem('idEmpresa', empresa.idEmpresa);
  }
}
