import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComponentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-component-list',
  templateUrl: 'component-list.html',
})
export class ComponentListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentListPage');
  }


    items = [
        'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X'
    ];

    itemSelected(item: string) {
        console.log("Selected Item", item);
    }

}
