import { LoginPage } from './../pages/login/login';
import { RoadBlockAgePage } from './../pages/road-block/road-blockage';
import { GeneralNewsPage } from './../pages/news/general-news/general-news';
import { AboutUsPage } from '../pages/about-us/about-us';
import { CommonConstants } from './../modules/common/common.constants';
import { NewsPage } from './../pages/news/news';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { FinesAndPenaltiesPage } from '../pages/fines-and-penalties/fines-and-penalties';
import { SendAComplainPage } from '../pages/send-a-complain/send-a-complain';

@Component({
  selector: 'app-main',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  userImg: string = CommonConstants.PATHS.UNKNOWN_USER_IMAGE;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'News', component: NewsPage },
      { title: 'General News', component: GeneralNewsPage },
      { title: 'Road Blockage', component: RoadBlockAgePage },
      { title: 'Fines and Penalties', component: FinesAndPenaltiesPage },
      { title: 'Help', component: HelpPage },
      { title: 'About Us', component: AboutUsPage },
      { title: 'Send a Complain', component: SendAComplainPage }
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
