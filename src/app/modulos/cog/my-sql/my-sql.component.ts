import { Component, OnInit } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-my-sql',
  templateUrl: './my-sql.component.html',
  styleUrls: ['./my-sql.component.scss'],
})
export class MySqlComponent extends BasicModulos implements OnInit {
  public script: string;
  public retorno: any;
  public cabecalhos: any = [];

  constructor(private requisicao: RequisicaoService) {
    super();
  }

  ngOnInit(): void {}
  buscarScript(script) {
    let rota = '/cog/buscarScript';
    let param = { script: script };

    this.requisicao.post(rota, param).subscribe(
      async (retorno: any) => {
        console.log(retorno);
        this.retorno = retorno;
        if (this.retorno.length > 0) {
          this.cabecalhos = this.retornaKeys(retorno[0]);
        }
        if (this.retorno == 500) {
          this.cabecalhos = ['Erro'];
          this.retorno = [
            {
              Erro: 'Erro ao requisitar o servidor, revise seu script. Use somente um comando em cada requisição',
            },
          ];
        }
      },
      (retorno: any) => {
        this.cabecalhos = ['Erro'];
        this.retorno = [{ Erro: 'Revise seu script' }];
      }
    );
  }
  retornaKeys(object) {
    return Object.keys(object);
  }
}
