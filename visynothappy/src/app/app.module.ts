import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LifeinsuredPage } from '../pages/lifeinsured/lifeinsured';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LifeInsuredService } from '../pages/lifeinsured/lifeinsuredservice';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LifeinsuredPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LifeinsuredPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LifeInsuredService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
