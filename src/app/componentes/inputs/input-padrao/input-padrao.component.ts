import { Component, OnInit } from '@angular/core';
import { BasicComponent } from 'src/app/classes/basic-component';

@Component({
  selector: 'input-padrao',
  templateUrl: './input-padrao.component.html',
  styleUrls: ['./input-padrao.component.scss'],
})
export class InputPadraoComponent extends BasicComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
