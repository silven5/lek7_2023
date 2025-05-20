import { FrirebaseTodoService } from '../service/frirebase-todo.service';
import { NewtaskComponent } from '../newtask/newtask.component';
import { Task } from '../task/task';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { filter, map, tap } from 'rxjs/operators';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  bdTodo = 'todo';
  bdDel = 'delete'
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!'
    }
  ];
  todo1: Task[] = [];
  todoDel: Task[] = []
  listItems = [
    "1. Aylin Roberts",
    "2. Autumn Kuhic",
    "3. Tiffany Windler",
    "4. Sheila Bauch",
    "5. Diana Gerhold",
    "6. Arielle Kuhn"
  ];
  task: Task = { id: "", title: "", description: "" };
  //Створення нової задачі за допомогою модального вікна
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: NewtaskComponent,
      componentProps: { task: this.task },
    });
    modal.present();
    modal.onDidDismiss()
      .then((data) => {
        const task1 = data['data']; // Тут обираємо задачу!
        console.log('data came back from modal');
        console.log(task1);
        this.addTodo(task1);
      });
  }
  //Додаємо нову задачу до масиву задач
  addTodo(task: Task) {
    //Якщо вікно закрилось не стандартно і task не існує
    if (typeof task !== 'undefined')
      //Якщо це не порожня задача
      if (task.title != "" && task.description != "")
        //то додати до масиву
        // this.todo.push(task);
        // this.fbService.createTask(task, true);
        this.fbService.updateTask(task, this.bdTodo);
  }
  //Видалення задачі
  deleteTask(event: any) {
    if (event as Task) {
      let task = event;
      var tas = this.todo.indexOf(task);
      //  this.todo.splice(tas,1);
      this.fbService.deleteTask(task.id, this.bdTodo, true);
      //Додати до списку видалених
      this.fbService.createTask(task, false);
    }
  }
  //Drag & Drop
  onRenderItems(event: any) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    let draggedItem = this.listItems.splice(event.detail.from, 1)[0];
    this.listItems.splice(event.detail.to, 0, draggedItem)
    event.detail.complete();
  }

  getList() {
    console.table(this.listItems);
  }
  constructor(public modalCtrl: ModalController, public fbService: FrirebaseTodoService) {

  }


  ngOnInit() {
    this.fetchTask(this.bdTodo, true);
    let taskRes = this.fbService.getTaskList(this.bdTodo, true);
    taskRes.snapshotChanges().subscribe(res => {
      console.log("res=" + res);
      this.todo1 = [];
      res.forEach(item => {
        let a = <Task>item.payload.toJSON();
        // a['$key'] = item.key;
        // console.log("a=" + a['$key']);
        // console.log(a);
        this.todo1.push(a);
      })
    })
    //Додала для видалених задач
    this.fetchTask(this.bdDel, false);
    let taskRes1 = this.fbService.getTaskList(this.bdDel, false);
    taskRes1.snapshotChanges().subscribe(res => {
      this.todoDel = [];
      res.forEach(item => {
        let a = <Task>item.payload.toJSON();
        // a['$key'] = item.key;
        this.todoDel.push(a as Task);
      })
    })

    console.log("RES" + this.todo1);
  }

  fetchTask(bd: any, op: any) {
    this.fbService.getTaskList(bd, op).valueChanges().subscribe(res => {
      // console.log("RES=" + res)
    })
  }
  //Очистка списку видалених
  clearDel() {


    for (let i = 0; i < this.todoDel.length; i++) {
      let task: any;
      task = this.todoDel[i];
      this.fbService.deleteTask(task.$key, this.bdTodo, false);
    }
    this.todoDel = [];

  }

}
