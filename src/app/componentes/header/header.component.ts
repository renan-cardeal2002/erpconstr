import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'header-padrao',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BasicModulos implements OnInit {
  @Output() changeEmpresa: EventEmitter<any> = new EventEmitter();
  public listagemEmpresasUsuario: any = [];

  constructor(private router: Router, private requisicao: RequisicaoService) {
    super();
  }

  ngOnInit(): void {
    let modoSalvo = window.localStorage.getItem('modo');
    if (modoSalvo == 'dark') {
      this.alterarTemaEscuro();
    } else if (modoSalvo == 'light') {
      this.alterarTemaClaro();
    }
    this.buscarEmpresasUsuario(this.idUsuarioLogado);
  }
  navegar(rota) {
    this.router.navigate([rota]);
  }
  async buscarEmpresasUsuario(usuario) {
    let rota = '/cog/buscarEmpresasUsuario?idUsuario=' + usuario;
    this.requisicao.get(rota).subscribe(
      async (retorno: any) => {
        this.listagemEmpresasUsuario = retorno;
      },
      (retorno: any) => {}
    );
  }
  alterarEmpresa(empresa) {
    this.changeEmpresa.emit(empresa);
  }
  alterarTemaEscuro() {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    window.localStorage.setItem('modo', 'dark');
  }
  alterarTemaClaro() {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    window.localStorage.setItem('modo', 'light');
  }
}
