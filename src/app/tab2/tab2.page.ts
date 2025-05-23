import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  cout = 1;
  public string1 = <string>'Data from parent ...';
  //Метод для зміни даних в дочірньому компоненті
  changeChild1Data() {
    this.string1 += this.cout + ' ';
    this.cout++;
  }
  //приклад2
  public string2 = '';
  public sum: number = 0;
  public sqr: number = 0;
  receiveFromChild(event: any) {
    //!Потрібна валідація
    //!як мінмум перевірка на тип
    if (typeof event === 'string') {
      console.log('string');
      this.string2 = event;
    } else console.log('Not string');
  }
  childSum(event: any) {
    if (typeof event === 'number') {
      this.sum = event;
    } else console.log('Not number!!!!');
  }
  childSqr(event: any) {
    if (typeof event === 'number') {
      this.sqr = event;
    } else console.log('Not number!!!!');
  }
  constructor() {}
}
