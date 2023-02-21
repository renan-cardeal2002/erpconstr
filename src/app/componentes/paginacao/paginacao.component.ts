import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss'],
})
export class PaginacaoComponent implements OnInit {
  @Input() pagina: number;
  @Input() itensPagina: number;

  constructor() {}

  ngOnInit(): void {}
}
