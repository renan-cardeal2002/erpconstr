import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-cancelar',
  templateUrl: './botao-cancelar.component.html',
  styleUrls: ['./botao-cancelar.component.scss'],
})
export class BotaoCancelarComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.label) {
      this.label = 'Cancelar';
    }
    if (!this.toolTip) {
      this.toolTip = 'Cancelar';
    }
  }
}
