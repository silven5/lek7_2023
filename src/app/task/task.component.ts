import { FrirebaseTodoService } from '../service/frirebase-todo.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  editFlag: boolean = false;
  //Вхідні дані - завдання
  @Input() task!: Task;
  @Input() fb!: FrirebaseTodoService;
  //Вихідні дані - результати редагування
  @Output() edit = new EventEmitter<Task>();
  @Output() del = new EventEmitter<Task>();
  constructor(public modalCtrl: ModalController) { }
  //Створення нової задачі за допомогою модального вікна
  bdTodo = 'todo';
  ngOnInit() { }
  editTask(task: any) {
    this.editFlag = true;
  }
  saveEdit(title: any, desc: any) {
     this.task.title = title;
    this.task.description = desc;
    this.editFlag = false;
    console.log(this.task);
    //З'явилося при підключені БД
    let id: any = this.task;
    this.fb.updateTask(this.task, this.bdTodo);
    this.edit.emit(this.task)
  }
  delete(task: any) {
    console.log("delete");
    this.del.emit(task);
  }
}
