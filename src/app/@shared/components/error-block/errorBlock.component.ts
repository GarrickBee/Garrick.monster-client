import { Component, OnInit, Input } from '@angular/core';
import { Errors } from '@core/models';

@Component({
  selector: 'block-error',
  templateUrl: './errorBlock.component.html',
  styleUrls: ['./errorBlock.component.scss']
})
export class ErrorBlockComponent implements OnInit {

  @Input()
  errors: Errors;

  constructor() { }
  ngOnInit(): void {
  }

}
