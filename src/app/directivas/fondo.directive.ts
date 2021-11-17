import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFondo]'
})
export class FondoDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor = '';
  @Input('appFondo') highlightColor  = '';

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || this.defaultColor ||'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}


