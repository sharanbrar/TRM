import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the DashboardFloatMenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard-float-menus',
  templateUrl: 'dashboard-float-menus.html',
})
export class DashboardFloatMenusPage {
  id : any;
  actions : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  	this.id = this.navParams.get('id');
    this.actions = this.navParams.get('actions');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardFloatMenusPage');
  }
  doAction(action){
    this.close(this.id,action);
  }

  close(id,action) {
    this.viewCtrl.dismiss({id:id,action:action});
  }
}
