import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: {
    textOrTpl: string | TemplateRef<any>;
    messageLink?: string;
    idButton?: string;
    classname?: string;
    delay?: number;
    autoHide: boolean;
  }[] = [];
  toastsDown: {
    textOrTpl: string | TemplateRef<any>;
    classname?: string;
    delay?: number;
    autoHide: boolean;
  }[] = [];

  constructor() {}
  show(
    textOrTpl: string | TemplateRef<any>,
    options: { classname?: string; delay?: number; autoHide: true } = {
      autoHide: true,
    }
  ) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  removeDown(toast) {
    this.toastsDown = this.toastsDown.filter((t) => t !== toast);
  }

  erroAoRequisitarServidor() {
    let textOrTpl = 'Erro ao requisitar o servidor';
    let options = {
      classname: 'bg-danger text-light ',
      autoHide: true,
    };

    this.toasts.push({ textOrTpl, ...options });
  }

  success(
    textOrTpl: string | TemplateRef<any>,
    messageLink?: string,
    idButton?: string,
    delay = 2800
  ) {
    let options = {
      classname: 'bg-success text-light ',
      delay: delay,
      autoHide: true,
    };

    this.toasts.push({ textOrTpl, messageLink, idButton, ...options });
  }

  danger(
    textOrTpl: string | TemplateRef<any>,
    messageLink?: string,
    idButton?: string,
    delay?: number
  ) {
    let options = {
      classname: 'bg-danger text-light ',
      delay: delay,
      autoHide: true,
    };

    this.toasts.push({ textOrTpl, messageLink, idButton, ...options });
  }

  successDown(textOrTpl: string | TemplateRef<any>, delay = 2800) {
    let options = {
      classname: 'bg-success text-light ',
      delay: delay,
      autoHide: true,
    };

    this.toastsDown.push({ textOrTpl, ...options });
  }

  dangerDown(textOrTpl: string | TemplateRef<any>, delay?: number) {
    let options = {
      classname: 'bg-danger text-light ',
      delay: delay,
      autoHide: true,
    };

    this.toastsDown.push({ textOrTpl, ...options });
  }
}
