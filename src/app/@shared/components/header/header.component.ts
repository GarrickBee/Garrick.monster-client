import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare const M: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  }


}
