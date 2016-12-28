import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DataService} from './data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from './keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService, HotkeysService]
})
export class AppComponent implements OnInit{

 data:any;
 amount:number;
 assignments: any;
 alert:boolean;
 value:number = 0;
 instructions:string;
 showCalendar:boolean = false;
 total:number = 0;
 taskLimit:number;


 constructor(private dataService: DataService, private _hotkeysService: HotkeysService){
 }

 ngOnInit() {

   this.data = this.dataService.getData()
     .subscribe(
        data => {
         this.data = data;
         this.amount = this.data.assignments.length;
         this.assignments = this.data.assignments;
         this.alert = this.data.alert;
         this.instructions = this.assignments[0].instructions;
         this.showCalendar = this.data.showCalendar;
         this.taskLimit = this.data.totalTasks;
        // console.log("the data alert", this.value);
        },
        err => console.error(err),
        () => console.log('app component data loaded')

     );
 }

 imageSrc(picture){
   return "assets/images/" + picture;
 }

  getTotal(){
    this.total = this.taskLimit;
    for(var i=0; i<this.amount-1; i++){
      if(this.assignments[i].type=="two"){
        this.total += 1;
      }
    }
    console.log("total", this.total);
    return this.total;
  }

}
