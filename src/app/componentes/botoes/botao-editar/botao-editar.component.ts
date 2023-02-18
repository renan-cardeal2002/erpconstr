import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-editar',
  templateUrl: './botao-editar.component.html',
  styleUrls: ['./botao-editar.component.scss'],
})
export class BotaoEditarComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
