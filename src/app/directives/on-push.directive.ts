import {
  Directive,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectorRef,
  ElementRef,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[onPush]',
})
export class OptimizeOnPushDirective implements OnInit, OnChanges {
  @Input() appOptimizeOnPush: any[];

  constructor(private cdRef: ChangeDetectorRef, private el: ElementRef) {}

  ngOnInit(): void {
    this.cdRef.detach(); // Define o componente para anexar por padrão
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputChanges = Object.keys(changes).filter(
      (prop) => prop === 'appOptimizeOnPush'
    );
    if (inputChanges.length) {
      this.cdRef.detectChanges();
      this.cdRef.reattach();
    }
  }
}
