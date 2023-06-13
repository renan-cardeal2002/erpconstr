import { RequisicaoService } from 'src/app/services/requisicao.service';

import { Injectable } from '@angular/core';
import { BasicModulos } from '../classes/basic-modulos';

@Injectable({
  providedIn: 'root',
})
export class AplicativosService extends BasicModulos {
  constructor(private requisicao: RequisicaoService) {
    super();
  }

  buscarAplicacoesUsuario(empresa?, usuario?, passaNull = false) {
    let idEmpresa = empresa ? empresa : this.idEmpresaSelecionada;
    let idUsuario = usuario ? usuario : this.idUsuarioLogado;

    if (passaNull) {
      idEmpresa = undefined;
    }

    let rota =
      '/cog/buscarAplicacoesUsuario?idUsuario=' +
      idUsuario +
      '&idEmpresa=' +
      idEmpresa;

    return this.requisicao.get(rota);
  }
}
