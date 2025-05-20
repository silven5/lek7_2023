import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal'
@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  //властивість для редагування
  @Input() animal!: Animal;
  //Подія, що свідчить про оновлення даних про тварину
  //Батьківський компонент слухає цю подію та отримує дані
  @Output() animalChange: EventEmitter<Animal> = new EventEmitter<Animal>();
  constructor() { }

  ngOnInit() { }
  //метод оновлення
  update(name: any, type: any, portait: any) {
    let anim = new Animal();
    anim.id = this.animal.id;
    if ((typeof name === 'string') && (typeof type === 'string') && (typeof portait === 'string')) {
      anim.name = name;
      anim.portrait = portait;
      anim.type = type;
      this.animal = anim;
    }
    this.animalChange.emit(this.animal);
    console.log(this.animal);
  }
}
