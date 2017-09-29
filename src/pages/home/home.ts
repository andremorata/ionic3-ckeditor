import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public htmlContent: string;

  constructor(public navCtrl: NavController) {
    this.htmlContent = '';
  }

  htmlChanged(e) {
    this.htmlContent = e;
  }

}
