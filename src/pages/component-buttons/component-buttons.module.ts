import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentButtonsPage } from './component-buttons';

@NgModule({
  declarations: [
    ComponentButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentButtonsPage),
  ],
})
export class ComponentButtonsPageModule {}
