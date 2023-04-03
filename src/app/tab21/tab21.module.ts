import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './../animal/animal-list/animal-list.component';
import { IonicModule } from '@ionic/angular';
import { AnimalDetailComponent } from './../animal/animal-detail/animal-detail.component';
import { Tab21PageRoutingModule } from './tab21-routing.module';

import { Tab21Page } from './tab21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab21PageRoutingModule
  ],
  declarations: [Tab21Page, AnimalListComponent, AnimalDetailComponent]
})
export class Tab21PageModule { }
