import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { DataService} from '../data.service';
import { RequestService} from '../request.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import * as jsPDF from 'jspdf';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [DataService, HotkeysService, RequestService]
})
export class AdminComponent implements OnInit {

  data:any;
 amount:number;
 assignments: any;
 alert:boolean;
 value:number = 0;
 instructions:string;
 showCalendar:boolean = false;
 total:number = 0;
 taskLimit:number;
 appTitle:string;
 postRequest: any;
 ui: any;

 constructor(private dataService: DataService, private _hotkeysService: HotkeysService, private http: Http, private requestService: RequestService){
 }

 ngOnInit() {

   this.data = this.dataService.getData('assets/admin.json')
     .subscribe(
        data => {
         this.data = data;
         this.amount = this.data.assignments.length;
         this.assignments = this.data.assignments;
         this.alert = this.data.alert;
         this.instructions = this.assignments[0].instructions;
         this.showCalendar = this.data.showCalendar;
         this.taskLimit = this.data.totalTasks;
         this.ui = this.data.style;
         // console.log("the data alert", this.ui.image.url);
        },
        err => console.error(err),
        () => console.log('app component data loaded')

     );
 }

 imageSrc(picture){
   return "assets/images/" + picture;
 }

  getData() {
    this.requestService.getSomeData()
      .subscribe(
        data => this.appTitle = data.date,
        error => console.log(error),
        () => console.log("Completed!")
      );
  }

  postData(){
    this.requestService.postSomeData()
      .subscribe(
        data => this.postRequest = data,
        error => console.log('There is an error: ' + error),
        () => console.log("Completed Post Request!")
      );
  }

}
