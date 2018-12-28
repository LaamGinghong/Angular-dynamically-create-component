import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() type: string;
  @Output() outPutType = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  sendOutputMessage(type: string): void {
    this.outPutType.emit(type);
  }
}
