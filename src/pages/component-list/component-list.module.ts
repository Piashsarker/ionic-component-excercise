import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentListPage } from './component-list';

@NgModule({
  declarations: [
    ComponentListPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentListPage),
  ],
})
export class ComponentListPageModule {}
