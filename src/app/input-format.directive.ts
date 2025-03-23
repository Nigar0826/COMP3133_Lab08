// Custom directive that formats input text to uppercase when the input field loses focus.
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase(); 
  }
}
