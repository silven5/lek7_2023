import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TaskComponent } from './../task/task.component';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { NewtaskComponent } from '../newtask/newtask.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule

  ],
  declarations: [Tab3Page, TaskComponent, NewtaskComponent]
})
export class Tab3PageModule { }
