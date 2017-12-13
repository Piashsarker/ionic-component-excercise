import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ComponentSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-component-select',
    templateUrl: 'component-select.html',
})
export class ComponentSelectPage {
    gaming: string = "n64";
    gender: string = "f";
    os: string;
    music: string;
    month: string;
    year: number;

    musicAlertOpts: { title: string, subTitle: string };

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.musicAlertOpts={
            title: '1994 Music',
            subTitle: 'Select your favorite'
        }
    }

    stpSelect(){
        console.log('STP Selected.');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ComponentSelectPage');
    }

}
