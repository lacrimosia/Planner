import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
  providers: [DataService, HotkeysService]
})
export class PrintComponent implements OnInit {
  @Input() data;
  @Input() amount;
  @Input() d;
  @Input() assignments;
  @Input() ui;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) { }

  ngOnInit() {
    this.defaultSelection();
  }

  imageSrc(pic){
    return "assets/images/" + pic;
  }

  goTo(index){
    this.data.value = index;
    if(this.data.value == this.amount-1){
      this.printContent();
    }else{
      this.hidePrintContent();
    }
  }

  printContent(){
    this.data.print = true;
    // If any of the buttons have not been selected, trigger error message
    // If they user selects all the assignments, then the print area becomes visible
    // loop goes through 1-7
    // It only checks types that have two answers
    for(let x=1; x<=this.data.assignments.length-2; x++){
      // check if category type is the two choices
      if(this.data.assignments[x].type=="task"){
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

// go through both arrays and if one task is in the list
// set first task to true
  defaultSelection()
  {
    for(var i=0; i<this.data.assignments.length-1; i++)
    {
      for(var j=0; j<this.data.assignments[i].tasks.length; j++)
      {
        if(this.data.assignments[i].tasks.length == 1)
        {
          this.data.assignments[i].tasks[0].select = true;
        }
      }
    }
  }
}
