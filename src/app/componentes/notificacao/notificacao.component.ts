import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'toast',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss'],
  // host: {'[class.ngb-toasts]': 'true'}
  host: {
    class: 'toast-container position-fixed top-0 end-0',
    style: 'z-index: 1200',
  },
})
export class NotificacaoComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}

  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  buscaId(idBut) {
    let id = document.getElementById(idBut);

    id.click();
  }
}
