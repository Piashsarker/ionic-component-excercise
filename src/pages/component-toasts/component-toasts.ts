import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the ComponentToastsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-component-toasts',
  templateUrl: 'component-toasts.html',
})
export class ComponentToastsPage {

  constructor(public toastCtrl: ToastController,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentToastsPage');
  }

  showToast(position: string){
      let toast = this.toastCtrl.create({
          message: 'Hi, I am a Toast',
          duration : 2000,
          position : position
      });
      toast.present(toast);
  }
  showToastWithCloseButton(){
      const  toast = this.toastCtrl.create(
          {
             message: 'Toast, With Close Button',
             showCloseButton: true ,
             closeButtonText: 'Ok'
          });
      toast.present(toast);
  }

  showLongToast(){
      let toast= this.toastCtrl.create(
          {
              message: 'Hi , I am a long toast text.',
              duration: 5000
          }

      );
      toast.present();
  }



}
