import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentGridPage } from './component-grid';

@NgModule({
  declarations: [
    ComponentGridPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentGridPage),
  ],
})
export class ComponentGridPageModule {}
