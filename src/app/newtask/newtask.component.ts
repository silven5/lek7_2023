import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../task/task';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent implements OnInit {

  @Input() task1!: Task;
  constructor(private modalCtrl: ModalController) { }
  //Закриваємо вікно та повертаєму пустий task
  close() {
    this.task = { title: "", description: "" };
    this.modalCtrl.dismiss(this.task);
  }
  task: Task = { title: "", description: "" };
  //закриваємо вікно та повертаємо task з веденими значеннями
  save(id: any, name: any, desc: any) {
    this.task.id = id;
    this.task.title = name;
    this.task.description = desc;

    this.modalCtrl.dismiss(this.task);
  }
  ngOnInit() {
    console.log(this.task1);
  }
  dismiss() {
    close();
  }



}
