import {Component, ViewChild} from '@angular/core';

import {MenuController, Nav, Platform} from 'ionic-angular';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ComponentUsagesPage} from "../pages/component-alert/component-usages";
import {BadgesPage} from "../pages/component-badges/badges";
import {ComponentButtonsPage} from "../pages/component-buttons/component-buttons";
import {ComponentCardsPage} from "../pages/component-cards/component-cards";
import {CheckboxPage} from "../pages/checkbox/checkbox";
import {ComponentDatetimePage} from "../pages/component-datetime/component-datetime";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage = HelloIonicPage;
    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public menu: MenuController,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Hello Ionic', component: HelloIonicPage},
            {title: 'My First List', component: ListPage},
            {title: 'Alert', component: ComponentUsagesPage},
            {title: 'Badges', component: BadgesPage},
            {title: 'Buttons', component: ComponentButtonsPage},
            {title: 'Card' , component: ComponentCardsPage},
            {title: 'Checkbox', component: CheckboxPage},
            {title: 'Date Time', component: ComponentDatetimePage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}
