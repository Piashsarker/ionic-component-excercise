import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentLoadingPage } from './component-loading';

@NgModule({
  declarations: [
    ComponentLoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentLoadingPage),
  ],
})
export class ComponentLoadingPageModule {}
