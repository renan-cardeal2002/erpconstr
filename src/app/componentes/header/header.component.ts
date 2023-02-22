import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'header-padrao',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BasicModulos implements OnInit {
  public listagemEmpresasUsuario: any = [];

  constructor(private router: Router, private requisicao: RequisicaoService) {
    super();
  }

  ngOnInit(): void {
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
}
