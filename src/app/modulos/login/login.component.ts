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
  constructor(private router: Router, private requisicao: RequisicaoService) {}

  ngOnInit(): void {}

  async logar(login: any) {
    let rota = '/cog/login?login=' + login.usuario + '&senha=' + login.senha;

    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        console.log(retorno);
        if (retorno.temUser > 0) {
          this.router.navigate(['/home']);
        }
      },
      (retorno: any) => {}
    );
  }
}
