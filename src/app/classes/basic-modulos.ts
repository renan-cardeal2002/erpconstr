import { Component, Input } from '@angular/core';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: '',
})
export abstract class BasicModulos {
  @Input() idEmpresaSelecionada: any = window.localStorage.getItem('idEmpresa');
  @Input() idUsuarioLogado: any = window.localStorage.getItem('idUsuario');
  @Input() loginUsuarioLogado: any = window.localStorage.getItem('usuario');
  @Input() aplicativos: any = [];
  @Input() aplicativosFavoritos: any = [];

  public modalRef: NgbModalRef;
  public carregando: boolean = false;

  fecharModal(modal) {
    this.modalRef = modal;
    this.modalRef.close();
  }
  async alteraEmpresaSelecionada(empresa) {
    this.idEmpresaSelecionada = empresa;
  }
}
