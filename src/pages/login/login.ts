import { HomePage } from './../home/home';
import { NavController } from 'ionic-angular';
import { CommonConstants } from './../../modules/common/common.constants';
import { Component } from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: 'login.html'
})

export class LoginPage{
    
    LOGO = CommonConstants.PATHS.LOGO;
    constructor(
        private _navCtrl: NavController
    ){}

    goToHome(){
        this._navCtrl.setRoot(HomePage);
    }
}