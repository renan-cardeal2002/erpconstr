import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-primario',
  templateUrl: './botao-primario.component.html',
  styleUrls: ['./botao-primario.component.scss'],
})
export class BotaoPrimarioComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
