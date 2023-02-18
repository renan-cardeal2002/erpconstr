import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'botao-close',
  templateUrl: './botao-close.component.html',
  styleUrls: ['./botao-close.component.scss'],
})
export class BotaoCloseComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
