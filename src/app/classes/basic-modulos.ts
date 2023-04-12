import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: '',
})
export abstract class BasicModulos {
  @Input() idEmpresaSelecionada: any = window.localStorage.getItem('idEmpresa');
  @Input() idUsuarioLogado: any = window.localStorage.getItem('idUsuario');
  @Input() loginUsuarioLogado: any = window.localStorage.getItem('usuario');
  @Input() aplicativos: any[] = [];
  @Input() dashboard: any[] = [];
  @Input() aplicativosFavoritos: any[] = [];

  public modalRef: NgbModalRef;
  public carregando: boolean = false;

  fecharModal(modal) {
    this.modalRef = modal;
    this.modalRef.close();
  }
  async alteraEmpresaSelecionada(empresa) {
    this.idEmpresaSelecionada = empresa;
  }
  trackById(index: number, item: any) {
    return item.id;
  }
}
