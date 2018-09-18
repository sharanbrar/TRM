import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController,ModalController } from 'ionic-angular';
import { DashboardFloatMenusPage } from '../dashboard-float-menus/dashboard-float-menus';
import { EditNotesPage } from '../edit-notes/edit-notes';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  houseData : any;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  	this.houseData = {
  		 id:1,
		 title: "Pam Nelson and Bill Nelson",
		 address:"12 Maple Street, Middleboro, MA",
		 image: "assets/imgs/house1.png",
		 type : 'Buyers',
		 notes : [
			 		 {id:1,
			 		 	title:'Pam Is Coming to the Intro Meeting',
			 		 	desc:"Just a little reminder that Pam will be there. Originally it was only going to be Bill, but now she can make it.",
			 		 	date : "4/9/2018 16:33:16"
			 		 },
		 		 ]
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  presentPopover(id,event) {
  	let actions = [
  					{title:'Edit',do:'edit'},
  					{title:'Share',do:'share'},
  				  ];
    const popover = this.popoverCtrl.create(DashboardFloatMenusPage,{id:id,actions:actions});
    popover.onDidDismiss(data => {
        if(data){
          console.log(data);
          if(data.action == "archive"){
          		this.removeNote(data.id);
          }else if(data.action == "edit"){
          	this.addnewnote(data.id);
          }
        }
    });
    popover.present({ev:event});
  }

  removeNote(id){
    let index = this.houseData.notes.map(function(e) { return e.id; }).indexOf(id);
    if(index > -1){
      this.houseData.notes.splice(index, 1);
    }
  }

  addnewnote(id?){
  	let nid =  this.houseData.notes.length+1 ;
  	const editModel = this.modalCtrl.create(EditNotesPage,{id:nid});
  	editModel.onDidDismiss(data => {
        if(data){
          console.log(data);
        }
    });
    editModel.present();
  }

}
