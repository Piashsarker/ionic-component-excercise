import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BasicTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-basic-text',
  templateUrl: 'basic-text.html',
})
export class BasicTextPage {
   position : number =0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.position= this.position++;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicTextPage');
  }

}
