import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-visualizar',
  templateUrl: './botao-visualizar.component.html',
  styleUrls: ['./botao-visualizar.component.scss'],
})
export class BotaoVisualizarComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
