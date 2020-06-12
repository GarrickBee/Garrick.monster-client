import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFormat'
})
export class ImageFormatPipe implements PipeTransform {

  transform(image: any): string {
    let url = image.api + image.path + image.file;
    return url;
  }

}
