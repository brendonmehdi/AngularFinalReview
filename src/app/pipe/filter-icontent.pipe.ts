import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "../student";

@Pipe({
  standalone: true,
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {

  transform(contents: Student[], type?: string): Student[] {
    if (type) {
      // Return items where the type matches the specified string
      return contents.filter(content => content.year === type);
    } else {
      // Return items where the type is not set
      return contents.filter(content => !content.year);

    }
  }

}
