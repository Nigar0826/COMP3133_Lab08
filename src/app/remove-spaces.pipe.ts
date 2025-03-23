// Custom pipe to remove hyphens from a string (e.g., 'Green-Lantern' → 'GreenLantern').
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (typeof value !== 'string') {
      return '';
    }
    return value.replace(/-/g, '');
  }
}
