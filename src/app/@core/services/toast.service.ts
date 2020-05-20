import { Injectable } from '@angular/core';
declare const M: any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }


  init(message?: string) {
    M.toast({ html: message });
  }


}
