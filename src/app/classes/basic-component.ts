import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: '',
})
export abstract class BasicComponent {
  @Output() buscaBotao: EventEmitter<any> = new EventEmitter();

  @Input() classes: string = '';
  @Input() toolTip: string = '';
  @Input() disabled: string;
  @Input() label: string = '';
  @Input() visualizar: boolean;
  @Input() model: any;
  @Input() type: string;
  @Input() maxlength: string;
  @Input() icon: boolean = false;

  funcao() {
    this.buscaBotao.emit();
  }
}
