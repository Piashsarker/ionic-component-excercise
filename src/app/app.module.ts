import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ItemDetailsPage} from '../pages/item-details/item-details';
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
import {BasicTextPage} from "../pages/basic-text/basic-text";

@NgModule({
    declarations: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        ComponentUsagesPage,
        BadgesPage,
        ComponentButtonsPage,
        ComponentCardsPage,
        CheckboxPage,
        ComponentDatetimePage,
        ComponentFabPage,
        GesturePage,
        ComponentGridPage,
        ComponentIconPage,
        ComponentInputPage,
        ComponentListPage,
        ComponentLoadingPage,
        ComponentRadioPage,
        ComponentRangePage,
        ComponentSearchbarPage,
        ComponentSegmentPage,
        ComponentSelectPage,
        ComponentSlidesPage,
        ComponentTabsPage,
        ComponentToastsPage ,
        ComponentTogglePage ,
        ComponentToolbarPage,
        BasicTextPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        ComponentUsagesPage,
        BadgesPage,
        ComponentButtonsPage,
        ComponentCardsPage,
        CheckboxPage,
        ComponentDatetimePage,
        ComponentFabPage,
        GesturePage,
        ComponentGridPage,
        ComponentIconPage,
        ComponentInputPage,
        ComponentListPage,
        ComponentLoadingPage,
        ComponentRadioPage,
        ComponentRangePage,
        ComponentSearchbarPage,
        ComponentSegmentPage,
        ComponentSelectPage,
        ComponentSlidesPage,
        ComponentTabsPage,
        ComponentToastsPage ,
        ComponentTogglePage ,
        ComponentToolbarPage,
        BasicTextPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
