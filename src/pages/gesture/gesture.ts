import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gesture',
  templateUrl: 'gesture.html',
})
export class GesturePage {

  public press : number = 0 ;
  public pan : number = 0 ;
  public swipe : number =0 ;
  public tap : number = 0 ;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturePage');
  }

  pressEvent(e){
    this.press++;
  }
  panEvent(e){
    this.pan++;
  }
  swipeEvent(e){
    this.swipe++;
  }
  tapEvent(e){
    this.tap++;
  }



}
