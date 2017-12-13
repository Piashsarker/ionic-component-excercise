import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the ComponentSegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-component-segment',
  templateUrl: 'component-segment.html',
})
export class ComponentSegmentPage {
  pet:String = "puppies";
  isAndroid:boolean = false ;

  constructor(platform:Platform, public navCtrl: NavController, public navParams: NavParams) {
      this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentSegmentPage');
  }

}
