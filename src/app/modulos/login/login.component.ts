import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: any = { usuario: '', senha: '' };
  public usuario: any = { usuario: 'Renan', senha: '123' };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  async logar(login: any) {
    if (
      this.usuario.usuario == this.login.usuario &&
      this.usuario.senha == this.login.senha
    ) {
      this.router.navigate(['/home']);
    } else {
    }
  }
}
