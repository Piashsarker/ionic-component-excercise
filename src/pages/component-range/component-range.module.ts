import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentRangePage } from './component-range';

@NgModule({
  declarations: [
    ComponentRangePage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentRangePage),
  ],
})
export class ComponentRangePageModule {}
