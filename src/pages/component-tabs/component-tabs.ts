import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {ComponentSlidesPage} from "../component-slides/component-slides";
import {BasicTextPage} from "../basic-text/basic-text";

/**
 * Generated class for the ComponentTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-component-tabs',
  templateUrl: 'component-tabs.html',
})
export class ComponentTabsPage {
  rootPage = BasicTextPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentTabsPage');
  }

}
