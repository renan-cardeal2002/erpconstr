import {
  Component,
  Injectable,
  Input,
  Output,
  OnInit,
  TemplateRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import {
  NgbModal,
  NgbModalRef,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalMensagemConfig } from './modal-mensagem.config';

@Component({
  selector: 'modal-mensagem',
  templateUrl: './modal-mensagem.component.html',
  styleUrls: ['./modal-mensagem.component.scss'],
})
export class ModalMensagemComponent implements OnInit {
  @Input() public modalConfig: ModalMensagemConfig;

  @Output() funcaoRecebida: EventEmitter<any> = new EventEmitter();
  @ViewChild('modalMensagem')
  private modalMensagem: TemplateRef<ModalMensagemComponent>;
  private modalRef: NgbModalRef;

  public ngbModalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
  };
  public ngbModalOptionsLg: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'lg',
  };
  public ngbModalOptionsSm: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'sm',
  };
  public ngbModalOptionsMd: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'md',
  };
  public ngbModalOptionsXl: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'xl',
  };
  public ngbModalOptionsFull: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    fullscreen: true,
  };

  constructor(private modal: NgbModal) {}

  ngOnInit(): void {}

  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modal.open(
        this.modalMensagem,
        this.ngbModalOptionsSm
      );
      this.modalRef.result.then(resolve, resolve);
    });
  }

  async close(): Promise<void> {
    if (
      this.modalConfig.shouldClose === undefined ||
      (await this.modalConfig.shouldClose())
    ) {
      const result =
        this.modalConfig.onClose === undefined ||
        (await this.modalConfig.onClose());
      this.modalRef.close(result);
    }
  }

  async dismiss(): Promise<void> {
    if (
      this.modalConfig.shouldDismiss === undefined ||
      (await this.modalConfig.shouldDismiss())
    ) {
      const result =
        this.modalConfig.onDismiss === undefined ||
        (await this.modalConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }

  async funcao() {
    this.funcaoRecebida.emit();
    await this.close();
  }
}
