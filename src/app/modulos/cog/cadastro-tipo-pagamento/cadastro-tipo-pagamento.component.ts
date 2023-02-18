import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-tipo-pagamento',
  templateUrl: './cadastro-tipo-pagamento.component.html',
  styleUrls: ['./cadastro-tipo-pagamento.component.scss'],
})
export class CadastroTipoPagamentoComponent implements OnInit {
  public listagemTiposPagamento: {
    idTipoPagamento: string;
    tipoPagamento: string;
  }[] = [];
  constructor() {}

  ngOnInit(): void {
    this.buscarTiposPagamento();
  }
  async buscarTiposPagamento() {
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'PIX',
      tipoPagamento: 'PIX',
    });
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'TED',
      tipoPagamento: 'Transferência bancária',
    });
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'CH',
      tipoPagamento: 'CHEQUE',
    });
    this.listagemTiposPagamento.push({
      idTipoPagamento: 'PIX',
      tipoPagamento: 'PIX',
    });
  }
}
