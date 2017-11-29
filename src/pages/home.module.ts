import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomePage } from './home/home';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [ HomePage ],
  entryComponents: [ HomePage ]
})
export class HomeModule {}