import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json',
})
export class JsonPipe implements PipeTransform {
  transform(value: any): string {
    // Use JSON.stringify to convert the input to a JSON string
    return JSON.stringify(value, null, 2); // Indented for better readability
  }
}
