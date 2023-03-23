import { RequisicaoService } from 'src/app/services/requisicao.service';

import { Injectable, TemplateRef } from '@angular/core';
import { BasicModulos } from '../classes/basic-modulos';

@Injectable({
  providedIn: 'root',
})
export class AplicativosService extends BasicModulos {
  constructor(private requisicao: RequisicaoService) {
    super();
  }

  async buscarAplicacoesUsuario(empresa?) {
    let rota =
      '/cog/buscarAplicacoesUsuario?idUsuario=' +
      this.idUsuarioLogado +
      '&idEmpresa=' +
      this.idEmpresaSelecionada;

    return this.requisicao.get(rota);
  }
}
