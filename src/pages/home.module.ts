import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomePage } from './home/home';

@NgModule({
  imports: [
    IonicModule.forRoot(HomePage),
  ],
  declarations: [ HomePage ]
})
export class HomeModule {}