import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-example1',
  templateUrl: './child-example1.component.html',
  styleUrls: ['./child-example1.component.scss'],
})
export class ChildExample1Component implements OnInit {
  @Input() public inFromParent!: string;
  @Input() public sum!: number;
  @Input() public mul!: number;
  @Input() public div!: number;
  @Input() public sqr!: number;
  constructor() {}

  ngOnInit() {}
}
