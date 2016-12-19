import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import * as jsPDF from 'jspdf';
import { ButtonAComponent } from '../button-a/button-a.component';
import { ButtonBComponent } from '../button-b/button-b.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [DataService, HotkeysService]
})
export class NavComponent implements OnInit {
	@Input() d:number = 0;
  @Input() assignments;
  @Input() data;
	selected:boolean;
  @Input() amount;
  @Input() value;
  textSelected: string;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) {
  	// this.dataService = dataService;
  //	this.value = 0;
  	this.selected = false;

  }

  ngOnInit() {
    // left keyboard shortcut
    this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
         //this.goTo();
         if(this.data.value >= 0 && this.data.value < (this.amount - 1) && this.data.error.open==false && this.data.alert==false){
           this.data.value++;
         }
         if(this.data.value == this.assignments.length-1){
           this.printContent();
         }else{
           this.hidePrintContent();
          // this.data.error.open = false;
         }
        return false; // Prevent bubbling
    }));

// right keyboard shortcut
    this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
      if(this.data.value > 0 && this.data.value < (this.amount) && this.data.error.open==false && this.data.alert==false){
        this.data.value--;
      }
      if(this.data.value == this.assignments.length-1){
        this.printContent();
      }else{
        this.hidePrintContent();
      //  this.data.error.open = false;
      }
        return false; // Prevent bubbling
    }));


   // The print keyboard shorcut
   this._hotkeysService.add(new Hotkey('p', (event: KeyboardEvent): boolean => {
          this.printContent();
            return false; // Prevent bubbling
  }));

  }

  // go to link onclick
  goTo(i){
  	this.data.value = i;
    if(this.data.value == this.assignments.length-1){
      this.printContent();
    }else{
      this.hidePrintContent();
    }
  }

  // show the correct picture
  imageSrc(picture){
  	return "assets/images/" + picture;
  }

printContent(){
  this.data.print = true;
  // If any of the buttons have not been selected, trigger error message
  // If they user selects all the assignments, then the print area becomes visible
  // loop goes through 1-7
  // It only checks types that have two answers
  for(let x=1; x<=this.data.assignments.length-2; x++){
    // check if category type is the two choices
    if(this.data.assignments[x].type=="two"){
      // then check if both selectA and selectB is false
      // this ensures they actually select something
      if(this.data.assignments[x].taskA.selectA == false && this.data.assignments[x].taskB.selectB==false){
        this.data.error.open = true;
        this.data.value = 2;
        this.hidePrintContent();
      }else{
        this.data.error.open = false;
      }
    }
  }
}

// hide the print area
hidePrintContent(){
  this.data.print = false;
}


taskSelected(task){
  return task;
}

}
