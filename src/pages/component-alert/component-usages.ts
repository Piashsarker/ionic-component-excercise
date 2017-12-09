import {Component} from '@angular/core';
import {ActionSheetController, AlertController,  NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the ComponentUsagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-component-usages',
    templateUrl: 'component-usages.html'
})
export class ComponentUsagesPage {
    /** Variable for Radio control **/
    testRadioOpen: boolean ;
    testRadioResult ;

    /** variable for checkbox alert control **/
    testCheckboxOpen: boolean ;
    testCheckboxResult;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public actionsheetCtrl: ActionSheetController,
                public platform: Platform,
                public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ComponentUsagesPage');
    }


    openMenu() {
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
    showBasicAlert(){
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
    showPromptAlert(){
        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }
    showConfirmAlert(){
        let confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }

            ]
        });
        confirm.present()
    }
    showRadioAlert(){
        let alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });

        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });

        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });

        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });

        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });

        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: data => {
                console.log('Radio data:', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });

        alert.present().then(() => {
            this.testRadioOpen = true;
        });
    }
    showCheckboxAlert(){
        let alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');

        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'alderaan',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'Bespin'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'Coruscant'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'Endor'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'Hoth'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'Jakku'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'Naboo'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'Takodana'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'Tatooine'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });
        alert.present().then(() => {
            this.testCheckboxOpen = true;
        });
    }


}
