import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

//import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { LifeInsuredModel } from './LifeInsuredModel';
import { LifeInsuredService } from './lifeinsuredservice';


@Component({
  selector: 'LifeinsuredPage-page',
  templateUrl: 'lifeinsured.html',
})
export class LifeinsuredPage {
  listing: LifeInsuredModel = new LifeInsuredModel();
  loading: any;

  constructor(
    public nav: NavController,
    public lifeinsuranceservice: LifeInsuredService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }


  ionViewDidLoad() {
    this.loading.present();
    this.lifeinsuranceservice
      .getData()
      .then(data => {
        this.listing.firstname = data.firstname;
        this.listing.surname = data.surname;
        // this.listing.banner_title = data.banner_title;
        // this.listing.populars = data.populars;
        // this.listing.categories = data.categories;
        this.loading.dismiss();
      });
 
  }


  goToFeed(category: any) {
    console.log("Clicked goToFeed", category);
    //this.nav.push(FeedPage, { category: category });
  }

}
