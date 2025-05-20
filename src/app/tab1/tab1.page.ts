import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  //Приклад1

  cout = 1;
  public string1 = <string>'Data from parent ...';
  public sum: number = 0;
  public don: number = 1;
  public div: number = 1;
  public sqr: number = 1;
  //Метод для зміни даних в дочірньому компоненті
  changeChild1Data() {
    this.string1 += this.cout + ' ';
    this.sum += this.cout;
    this.don = this.don * this.cout;
    this.div = this.cout * this.cout;
    this.sqr = this.cout * this.cout * this.cout;
    this.cout++;
  }
  constructor() {}
}
