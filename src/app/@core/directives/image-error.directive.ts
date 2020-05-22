import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImageError]'
})

export class ImageErrorDirective {

  @Input() appImageError: string;

  imageError: boolean;

  constructor(
    private eRef: ElementRef
  ) {
    this.imageError = true;

  }

  @HostListener('error')
  loadFallBackOnError() {
    if (this.imageError) {
      const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
      element.src = this.appImageError || '../../assets/logo/potato_sad.png';
    }
    this.imageError = false;
  }
}
