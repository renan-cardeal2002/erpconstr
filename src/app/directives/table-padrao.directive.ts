import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[tablePadrao]',
})
export class TablePadraoDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  async ngOnInit(): Promise<void> {
    this.addClass('table', this.el.nativeElement);
    this.addClass('table-sm', this.el.nativeElement);
    this.addClass('table-padrao', this.el.nativeElement);
    this.addClass('table-hover', this.el.nativeElement);
    this.addClass('table-header-sticky', this.el.nativeElement);
    this.addClass('table-bordered', this.el.nativeElement);
    this.addClass('cabecalho-fixo', this.el.nativeElement);
  }

  addClass(className: string, element: any) {
    this.renderer.addClass(element, className);
  }

  removeClass(className: string, element: any) {
    this.renderer.removeClass(element, className);
  }
}
