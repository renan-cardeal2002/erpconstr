import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-excluir',
  templateUrl: './botao-excluir.component.html',
  styleUrls: ['./botao-excluir.component.scss'],
})
export class BotaoExcluirComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
