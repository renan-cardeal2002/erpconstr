import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginacaoService {
  constructor() {}

  alteraListagemPaginada(
    array: any[],
    pagina: number,
    itensPagina: number
  ): any[] {
    const startIndex = (pagina - 1) * itensPagina;
    const endIndex = pagina * itensPagina;
    return array.slice(startIndex, endIndex);
  }
}
