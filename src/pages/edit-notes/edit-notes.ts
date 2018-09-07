import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the EditNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-notes',
  templateUrl: 'edit-notes.html',
})
export class EditNotesPage {
  noteTitle : string = "";
  noteDesc : string  = "";
  id : any;
  error : string = "";
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  	this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditNotesPage');
  }

  save(){
  	if(this.noteTitle && this.noteDesc){
  		let data = {id:this.id,title : this.noteTitle,desc : this.noteDesc,date:new Date()}
  		this.dismiss(data);
  	}else{
  		this.error = "Please Fill All details";
  	}
  }

  dismiss(data) {
	   this.viewCtrl.dismiss(data);
  }

}
