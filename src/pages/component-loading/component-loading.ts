import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoadingController} from "ionic-angular";


/**
 * Generated class for the ComponentLoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-component-loading',
  templateUrl: 'component-loading.html',
})
export class ComponentLoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentLoadingPage');
  }

  presentLoading(){
    this.loadingCtrl.create({
        content: 'Please Wait...',
        duration: 3000 ,
        dismissOnPageChange: true
    }).present();
  }

}
