import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentRadioPage } from './component-radio';

@NgModule({
  declarations: [
    ComponentRadioPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentRadioPage),
  ],
})
export class ComponentRadioPageModule {}
