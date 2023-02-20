import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: '',
})
export abstract class BasicComponent {
  @Output() buscaBotao: EventEmitter<any> = new EventEmitter();
  @Input() codEmpresaInicial: any = 1;

  @Input() classes: string = '';
  @Input() toolTip: string = '';
  @Input() disabled: string;
  @Input() label: string = '';
  @Input() visualizar: boolean;
  @Input() model: any;
  @Input() type: string;
  @Input() maxlength: string;

  funcao() {
    this.buscaBotao.emit();
  }
}
