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
    console.log('btnClick')
    this.btnCount++;
  }

  tappableClick(): void {
    console.log('tappableClick')
    this.tappableCount++;
  }

  unTappableClick():  void {
    console.log('unTappableClick')
    this.unTappableCount++;
  }

  btnTap(): void {
    console.log('btnTap')
    this.btnTapCount++;
  }

  unclickableTap(): void {
    console.log('unclickableTap')
    this.unclickableTapCount++;
  }

}
