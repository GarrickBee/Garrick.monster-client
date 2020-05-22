import { Component, OnInit, Input } from '@angular/core';
import { Errors } from '@core/models';

@Component({
  selector: 'block-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input()
  errors: Errors;

  constructor() { }
  ngOnInit(): void {
  }

}
