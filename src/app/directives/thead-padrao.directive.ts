import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[theadPadrao]',
})
export class TheadPadraoDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  async ngOnInit(): Promise<void> {
    this.addClass('table-dark', this.el.nativeElement);
  }

  addClass(className: string, element: any) {
    this.renderer.addClass(element, className);
  }

  removeClass(className: string, element: any) {
    this.renderer.removeClass(element, className);
  }
}
