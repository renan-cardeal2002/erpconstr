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
        if (retorno.dadosLogin.temUser > 0) {
          window.localStorage.setItem(
            'idUsuario',
            retorno.dadosLogin.idUsuario
          );

          this.empresasUsuario = retorno.empresas;
          this.selecionarEmpresa(retorno.empresas[0]);

          this.router.navigate(['/home']);
        }
      },
      (retorno: any) => {}
    );
  }
  async selecionarEmpresa(empresa) {
    window.localStorage.setItem('idEmpresa', empresa.idEmpresa);
  }
}
