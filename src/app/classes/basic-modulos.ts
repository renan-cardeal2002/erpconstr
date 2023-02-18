import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: '',
})
export abstract class BasicModulos {
  @Output() buscaBotao: EventEmitter<any> = new EventEmitter();
  @Input() codEmpresaInicial: any = 1;
  public modalRef: NgbModalRef;
  public carregando: boolean = false;

  fecharModal(modal) {
    this.modalRef = modal;
    this.modalRef.close();
  }
}
