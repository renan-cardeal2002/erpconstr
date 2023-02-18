import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-confirmar',
  templateUrl: './botao-confirmar.component.html',
  styleUrls: ['./botao-confirmar.component.scss'],
})
export class BotaoConfirmarComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.label) {
      this.label = 'Confirmar';
    }
  }
}
