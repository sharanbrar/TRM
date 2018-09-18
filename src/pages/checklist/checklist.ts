import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { DashboardFloatMenusPage } from '../dashboard-float-menus/dashboard-float-menus';

/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {
  houseData:any;
  phaseShown : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  	this.houseData = {
  		 id:1,
		 title: "Pam Nelson and Bill Nelson",
		 address:"12 Maple Street, Middleboro, MA",
		 image: "assets/imgs/house1.png",
		 type : 'Buyers',
		 phases : [
			 		 {id:1,
			 		 	name:'Create a Client Folder',
			 		 	desc:"Prior to the initial First Meeting with a buyer so you can start saving documents and notes in the folder. All documents pertaining to your client should be saved to the client folder (use the proper naming format) that you have created for your client in your ACTIVE CLIENTS folder in Google Drive. Review Working as a Buyer Agent.",
			 		 	status:0,
			 		 },
			 		 {id:2,
			 		 	name:'Conduct Pre-Showing Session',
			 		 	desc:"Prior to the initial First Meeting with a buyer so you can start saving documents and notes in the folder. All documents pertaining to your client should be saved to the client folder (use the proper naming format) that you have created for your client in your ACTIVE CLIENTS folder in Google Drive. Review Working as a Buyer Agent.",
			 		 	status :0,
			 		 },
			 		 {id:3,
			 		 	name:'Sign Agency Disclosure',
			 		 	desc:"Prior to the initial First Meeting with a buyer so you can start saving documents and notes in the folder. All documents pertaining to your client should be saved to the client folder (use the proper naming format) that you have created for your client in your ACTIVE CLIENTS folder in Google Drive. Review Working as a Buyer Agent.",
			 		 	status : 0,
			 		 },
			 		 {id:4,
			 		 	name:'Sign Co-Servicing Agreement',
			 		 	desc:"Prior to the initial First Meeting with a buyer so you can start saving documents and notes in the folder. All documents pertaining to your client should be saved to the client folder (use the proper naming format) that you have created for your client in your ACTIVE CLIENTS folder in Google Drive. Review Working as a Buyer Agent.",
			 		 	status : 0,
			 		 },
		 		 ]
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
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

  toggleHouse(phase) {
    if (this.isHouseShown(phase)) {
      this.phaseShown = null;
    } else {
      this.phaseShown = phase;
    }
  }
  isHouseShown(phase) {
    return this.phaseShown === phase;
  }

  mark(id,val){
    let index = this.houseData.phases.map(function(e) { return e.id; }).indexOf(id);
    if(index > -1){
      this.houseData.phases[index]['status'] = val;
      if(index == this.phaseShown){
        this.phaseShown = null;
      }
    }
  }
}
