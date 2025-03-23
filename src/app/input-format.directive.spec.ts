// Unit test to verify that the InputFormatDirective instance is created successfully.
import { ElementRef } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('input')); 
    const directive = new InputFormatDirective(elementRef);             
    expect(directive).toBeTruthy();
  });
});
