import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentFabPage } from './component-fab';

@NgModule({
  declarations: [
    ComponentFabPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentFabPage),
  ],
})
export class ComponentFabPageModule {}
