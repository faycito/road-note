import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showCheckBox: boolean = false;

  constructor(
    public navCtrl: NavController
  ) {

  }

  showItems(){
    this.showCheckBox = !this.showCheckBox;
  }
}
