import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() href: string;
  @Input() createdAt: Date;
  @Input() category: any;

  constructor() { }

  ngOnInit(): void {
  }

}
