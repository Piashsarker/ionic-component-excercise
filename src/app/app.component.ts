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
import {ComponentFabPage} from "../pages/component-fab/component-fab";
import {GesturePage} from "../pages/gesture/gesture";
import {ComponentGridPage} from "../pages/component-grid/component-grid";
import {ComponentIconPage} from "../pages/component-icon/component-icon";
import {ComponentInputPage} from "../pages/component-input/component-input";
import {ComponentListPage} from "../pages/component-list/component-list";
import {ComponentLoadingPage} from "../pages/component-loading/component-loading";
import {ComponentRadioPage} from "../pages/component-radio/component-radio";
import {ComponentRangePage} from "../pages/component-range/component-range";
import {ComponentSearchbarPage} from "../pages/component-searchbar/component-searchbar";
import {ComponentSegmentPage} from "../pages/component-segment/component-segment";
import {ComponentSelectPage} from "../pages/component-select/component-select";
import {ComponentSlidesPage} from "../pages/component-slides/component-slides";
import {ComponentTabsPage} from "../pages/component-tabs/component-tabs";
import {ComponentToastsPage} from "../pages/component-toasts/component-toasts";
import {ComponentTogglePage} from "../pages/component-toggle/component-toggle";
import {ComponentToolbarPage} from "../pages/component-toolbar/component-toolbar";


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
            {title: 'Date Time', component: ComponentDatetimePage},
            {title: 'FAB' , component: ComponentFabPage},
            {title: 'Gesture' , component: GesturePage},
            {title: 'Grid' , component: ComponentGridPage },
            {title: 'Icon' , component: ComponentIconPage},
            {title: 'Input' , component: ComponentInputPage},
            {title: 'List' , component: ComponentListPage},
            {title: 'Loading' , component: ComponentLoadingPage},
            {title: 'Radio' , component: ComponentRadioPage},
            {title: 'Range' , component: ComponentRangePage},
            {title: 'Search' , component: ComponentSearchbarPage},
            {title: 'Segment' , component: ComponentSegmentPage},
            {title: 'Select',component:ComponentSelectPage},
            {title: 'Slides' , component:ComponentSlidesPage},
            {title: "Tabs" , component: ComponentTabsPage},
            {title: "Toast", component:ComponentToastsPage},
            {title: "Toggle" , component: ComponentTogglePage},
            {title: "Toolbar" , component:ComponentToolbarPage}
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
