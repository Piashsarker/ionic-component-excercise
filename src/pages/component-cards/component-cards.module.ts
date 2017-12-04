import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentCardsPage } from './component-cards';

@NgModule({
  declarations: [
    ComponentCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentCardsPage),
  ],
})
export class ComponentCardsPageModule {}
