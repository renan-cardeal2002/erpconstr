import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-adicionar',
  templateUrl: './botao-adicionar.component.html',
  styleUrls: ['./botao-adicionar.component.scss'],
})
export class BotaoAdicionarComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
