import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
})
export class PaginacaoComponent implements OnInit, OnChanges {
  @Input() pagina: number = 1;
  @Output() paginaChange = new EventEmitter<number>();
  @Input() itensPagina: number = 10;
  @Output() itensPaginaChange = new EventEmitter<number>();
  @Input() length: number;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['length']) {
      this.calcularNovaPagina();
    }
  }

  pageChange(pageEvent) {
    console.log(pageEvent);
    this.novaPagina(pageEvent.pageIndex + 1);

    this.novoItensPorPagina(pageEvent.pageSize);
  }

  private novoItensPorPagina(itensPorPagina: number) {
    this.itensPagina = itensPorPagina;
    this.itensPaginaChange.emit(this.itensPagina);
  }

  private calcularNovaPagina() {
    let maximoPaginas = Math.ceil(this.length / this.itensPagina);

    setTimeout(() => {
      if (this.pagina == 0) {
        this.novaPagina(1);
        return;
      }

      if (this.pagina > maximoPaginas) {
        this.novaPagina(maximoPaginas);
        return;
      }
    });
  }

  private novaPagina(pagina: number) {
    this.pagina = pagina;
    this.paginaChange.emit(this.pagina);
  }
}
