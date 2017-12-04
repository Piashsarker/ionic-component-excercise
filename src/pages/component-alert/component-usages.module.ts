import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentUsagesPage } from './component-usages';

@NgModule({
  declarations: [
    ComponentUsagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentUsagesPage),
  ],
})
export class ComponentUsagesPageModule {}
