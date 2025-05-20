import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-example2',
  templateUrl: './child-example2.component.html',
  styleUrls: ['./child-example2.component.scss'],
})
export class ChildExample2Component implements OnInit {
  @Input() public inFromParent!: string;
  //Подія
  @Output() public outToParent = new EventEmitter();
  @Output() public outToParentSum = new EventEmitter();
  @Output() public outToParentSqr = new EventEmitter();
  sum: number = 0;
  sqr: number = 0;
  constructor() {}
  count = 1;
  ngOnInit() {}
  //Подія відбувається коли спрацює метод
  sendToParent() {
    this.outToParent.emit(
      'Child sent this message to parent ...' + this.count + ' '
    );
    // this.outToParent.emit(this.count);
    this.count++;
  }
  sendToParentSum() {
    this.sum = this.sum + this.count;
    this.outToParentSum.emit(this.sum);
  }
  sendToParentSqr() {
    this.sqr = this.count * this.count;
    this.outToParentSqr.emit(this.sqr);
  }
}
