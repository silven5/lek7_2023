import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal'
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {

  constructor() { }
  //Масив магічних тварин
  animals: Animal[] = [{ id: 1, name: 'Єдиноріг', type: 'XX', portrait: '🦄' },
  { id: 2, name: 'Магічна лисиця', type: 'X', portrait: '🦊' },
  { id: 3, name: 'Дракон', type: 'XХХХХХ', portrait: '🐲' },
  { id: 4, name: 'Ктулху', type: 'XХХХХХ', portrait: '🐙' },
  { id: 5, name: 'Тиранозавр', type: 'XХХХХХ', portrait: '🦖' },
  ];
  //Обрана тварина
  selectedAnimal: Animal = this.animals[0];
  //Метод showDetails отримує тварину як аргумент. 
  //позначаємо обраною
  showDetails(animal: Animal) {
    this.selectedAnimal = animal;
  }
  update(animal: Animal) {

    // var anim = this.animals.find(e => e.id == animal.id)
    //  Object.assign(anim,animal)
    this.animals = this.animals.map(e => {
      if (e.id === animal.id) {
        return animal;
      }
      return e;
    });
    console.log("Дані оновлено");

  }
  ngOnInit() {

  }

}
