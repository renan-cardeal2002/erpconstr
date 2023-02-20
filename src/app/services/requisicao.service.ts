import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoService {
  private url = '';
  constructor(private httpCliente: HttpClient) {
    this.url = environment.url;
  }

  post(url: string, body: any, useBaseUrlPadrao = true, tipoResposta = 'json') {
    let obj: any = {
      headers: {},
      responseType: tipoResposta,
    };
    let urlMontada = this.url + url;
    if (!useBaseUrlPadrao) {
      urlMontada = url;
    }
    return this.httpCliente.post(urlMontada, body, obj);
  }

  get(url: string, useBaseUrlPadrao = true) {
    let obj: any = {
      headers: {},
    };
    let urlMontada = this.url + url;
    if (!useBaseUrlPadrao) {
      urlMontada = url;
    }
    return this.httpCliente.get(urlMontada, obj);
  }

  delete(url: string, useBaseUrlPadrao = true) {
    let obj: any = {
      headers: {},
    };
    let urlMontada = this.url + url;
    if (!useBaseUrlPadrao) {
      urlMontada = url;
    }
    return this.httpCliente.delete(urlMontada, obj);
  }

  put(url: string, body: any, useBaseUrlPadrao = true) {
    let obj: any = {
      headers: {},
    };
    let urlMontada = this.url + url;
    if (!useBaseUrlPadrao) {
      urlMontada = url;
    }
    return this.httpCliente.put(urlMontada, body, obj);
  }
}
