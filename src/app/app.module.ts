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
        ComponentRangePage
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
        ComponentRangePage

    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
