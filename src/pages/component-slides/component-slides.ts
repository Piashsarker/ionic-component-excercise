import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComponentSlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-component-slides',
  templateUrl: 'component-slides.html',
})
export class ComponentSlidesPage {
    slides = [
        {
            title: "Welcome to the Docs!",
            description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
            image: "assets/imgs/test_image.jpg",
        },
        {
            title: "What is Ionic?",
            description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
            image: "assets/imgs/test_image.jpg",
        },
        {
            title: "What is Ionic Cloud?",
            description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
            image: "assets/imgs/test_image.jpg",
        }
    ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentSlidesPage');
  }

}
