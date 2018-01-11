import { LoginPage } from './../pages/login/login';
import { GeneralNewsPage } from './../pages/news/general-news/general-news';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { HelpPage } from '../pages/help/help';
import { AboutUsPage } from '../pages/about-us/about-us';
import { FinesAndPenaltiesPage } from '../pages/fines-and-penalties/fines-and-penalties';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoadBlockAgePage } from '../pages/road-block/road-blockage';
import { SendReportPage } from '../pages/send-report/send-report';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
    HelpPage,
    AboutUsPage,
    GeneralNewsPage,
    RoadBlockAgePage,
    FinesAndPenaltiesPage,
    LoginPage,
    SendReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
    HelpPage,
    AboutUsPage,
    GeneralNewsPage,
    RoadBlockAgePage,
    FinesAndPenaltiesPage,
    LoginPage,
    SendReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
