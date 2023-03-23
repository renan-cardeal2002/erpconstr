import { Component, OnInit } from '@angular/core';
import { BasicModulos } from 'src/app/classes/basic-modulos';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends BasicModulos implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
