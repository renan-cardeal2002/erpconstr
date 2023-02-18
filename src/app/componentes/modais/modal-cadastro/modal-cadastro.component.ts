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
import { ModalCadastroConfig } from './modal-cadastro.config';

@Component({
  selector: 'modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss'],
})
export class ModalCadastroComponent implements OnInit {
  @Input() public modalConfig: ModalCadastroConfig;
  @Output() funcaoRecebida: EventEmitter<any> = new EventEmitter();
  @ViewChild('modalCadastro')
  private modalPadrao: TemplateRef<ModalCadastroComponent>;

  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;

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

  async open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modal.open(this.modalPadrao, this.ngbModalOptionsXl);
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
    //await this.close();
  }
}
