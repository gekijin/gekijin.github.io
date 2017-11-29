import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  btnCount: number = 0;
  tappableCount: number = 0;
  unTappableCount: number = 0;
  btnTapCount: number = 0;
  unclickableTapCount: number = 0;

  constructor(public navCtrl: NavController) {

  }

  btnClick(): void {
    this.btnCount++;
  }

  tappableClick(): void {
    this.tappableCount++;
  }

  unTappableClick():  void {
    this.unTappableCount++;
  }

  btnTap(): void {
    this.btnTapCount++;
  }

  unclickableTap(): void {
    this.unclickableTapCount++;
  }

}
