import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.scss']
})
export class SocialbuttonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initToolTip();
  }

  initToolTip() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  }
}
