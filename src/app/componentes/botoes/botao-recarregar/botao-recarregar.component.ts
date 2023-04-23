import { Component, OnInit, Input } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-recarregar',
  templateUrl: './botao-recarregar.component.html',
  styleUrls: ['./botao-recarregar.component.scss'],
})
export class BotaoRecarregarComponent extends BasicComponent implements OnInit {
  @Input() carregando: boolean = false;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
