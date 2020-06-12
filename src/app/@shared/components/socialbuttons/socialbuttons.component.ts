import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const M: any;
let d: any;
@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.scss']
})
export class SocialbuttonsComponent implements OnInit, AfterViewInit {
  socialUrl: {
    facebook: string,
    twitter: string
  };



  constructor() {
    d = window.document;
    this.socialUrl = {
      facebook: 'https://www.facebook.com/sharer/sharer.php?u={0}',
      twitter: 'https://twitter.com/intent/tweet?url={0}&text={1}'
    };

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initToolTip();
  }
  /**
   * Materialize Share Button Tooltip
   */
  initToolTip() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }

  /**
   * Social Share 
   * @param element 
   */
  share(element: string) {
    if (typeof this.socialUrl[element] == 'undefined') {
      return false;
    }
    let url = this.stringFormat(this.socialUrl[element], [window.location.href]);
    return this.popUp(url);
  }

  /**
   * Format String to Url
   * @param str 
   * @param args 
   */
  stringFormat(str: string, args: string[] | number[]): string {
    return str.replace(/\{(\d+)\}/g, (m: any, n: any) => {
      return args[n] || m
    });
  };

  /**
   * Window Pop Up
   * @param url 
   * @param title 
   */
  popUp(url: string, title?: undefined) {
    var _w = 600,
      _h = 400,
      dualScreenLeft = window.screenLeft,
      dualScreenTop = window.screenTop,
      width = window.innerWidth || d.documentElement.clientWidth || screen.width,
      height = window.innerHeight || d.documentElement.clientHeight || screen.height,
      left = ((width / 2) - (_w / 2)) + dualScreenLeft,
      top = ((height / 3) - (_h / 3)) + dualScreenTop,
      windowFormat = 'resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width={0},height={1},top={2},left={3}',
      newWindow = window.open(url, '', this.stringFormat(windowFormat, [_w, _h, top, left]));
    console.log(newWindow);
    if (newWindow !== null && newWindow.focus) {
      newWindow.focus();
    }
  };


}
