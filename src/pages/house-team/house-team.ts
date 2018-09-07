import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { DashboardFloatMenusPage } from '../dashboard-float-menus/dashboard-float-menus';
/**
 * Generated class for the HouseTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-house-team',
  templateUrl: 'house-team.html',
})
export class HouseTeamPage {
  houseData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  	this.houseData = {
  		 id:1,
		 title: "Pam Nelson and Bill Nelson",
		 address:"12 Maple Street, Middleboro, MA",
		 image: "assets/imgs/house1.png",
		 type : 'Buyers',
		 team : [
		 		 {id:1,name:'Bob Simone',type:'Buyer Agent'},
		 		 {id:2,name:'Mike McKenna',type:'Home Inspector'},
		 		 {id:3,name:'Casey Botelho',type:'Mortgage Broker'},
		 		]
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseTeamPage');
  }

  presentPopover(id) {
    let actions = [
            {title:'Call',do:'call'},
            {title:'Send Notes',do:'note'},
            {title:'Event',do:'event'},
            ];
    const popover = this.popoverCtrl.create(DashboardFloatMenusPage,{id:id,actions:actions});
    popover.onDidDismiss(data => {
        if(data){
          console.log(data);
        }
    });
    popover.present();
  }

}
