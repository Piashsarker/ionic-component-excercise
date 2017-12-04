import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentDatetimePage } from './component-datetime';

@NgModule({
  declarations: [
    ComponentDatetimePage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentDatetimePage),
  ],
})
export class ComponentDatetimePageModule {}
