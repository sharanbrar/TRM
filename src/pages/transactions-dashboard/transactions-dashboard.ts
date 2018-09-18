import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { DashboardFloatMenusPage } from '../dashboard-float-menus/dashboard-float-menus';
import { HouseTeamPage } from '../house-team/house-team';
import { ChecklistPage } from '../checklist/checklist';
import { NotesPage } from '../notes/notes';
/**
 * Generated class for the TransactionsDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactions-dashboard',
  templateUrl: 'transactions-dashboard.html',
})
export class TransactionsDashboardPage {
  MainhouseData : any;
  houseData : any;
  shownHouse : any;
  SelectedlistType: any;
  SearchInput : any = '';
  showSearchbar:boolean= false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  	this.houseData= [
  			{
  			 id:1,
  			 title: "Pam Nelson and Bill Nelson",
  			 address:"12 Maple Street, Middleboro, MA",
  			 image: "assets/imgs/house1.png",
  			 type : 'Buyers'
  			},
  			{
  			 id:2,
  			 title: "Erin Tanguay",
  			 address:"13 Maple Street, Lakeville, MA",
  			 image: "assets/imgs/house2.png",
  			 type : 'Seller'
  			}
  	];
    this.MainhouseData = this.houseData;
  	this.SelectedlistType = 'Buyers'; // Buyers,Seller,Landlord,Tenant
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsDashboardPage');
  }
  search(e){
    if(this.SearchInput){
      console.log(e,this.SearchInput);
    }
  }

  toggleSearch(){
    this.showSearchbar = (this.showSearchbar) ? false : true ;
  }
  renderListClass() {
	  switch(this.SelectedlistType){
	    case "Buyers":
	       return "buyers"
	    case "Seller":
	       return "sellers"
	    case "Landlord":
	       return "lanlords"
	    case "Tenant":
	       return "tenants"
	  }
  }

  presentPopover(id,event) {
  	let actions = [
  					{title:'Edit',do:'edit'},
  					{title:'Share',do:'share'},
  					{title:'Archive',do:'archive'},
  				  ];
    const popover = this.popoverCtrl.create(DashboardFloatMenusPage,{id:id,actions:actions});
    popover.onDidDismiss(data => {
        if(data){
          console.log(data);
          if(data.action == "archive"){
          		this.removePost(data.id);
          }
        }
    });
    popover.present({ev:event});
  }

  removePost(id){
	    let index = this.houseData.map(function(e) { return e.id; }).indexOf(id);
	    if(index > -1){
	      this.houseData.splice(index, 1);
	    }
  }

  changeType(type){
  	this.SelectedlistType  = type;
  	this.shownHouse = null;
  }

  toggleHouse(house) {
    if (this.isHouseShown(house)) {
      this.shownHouse = null;
    } else {
      this.shownHouse = house;
    }
  }
  isHouseShown(house) {
    return this.shownHouse === house;
  }
  openTeam(id){
    this.navCtrl.push(HouseTeamPage,{id:id});
  }
  openChecklist(id){
    this.navCtrl.push(ChecklistPage,{id:id});
  }
  opennotes(id){
    this.navCtrl.push(NotesPage,{id:id});
  }
}
