import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  providers: [DataService, HotkeysService]
})
export class ProgressComponent implements OnInit {

	@Input() data;
	@Input() assignments;
  	@Input() amount;
  	@Input() value;
  	@Input() total;
  	count:number = 0;
  	counter:number = 0;
    @Input() ui;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) { }

  ngOnInit() {
  	// this.getTotal();
  }

// keeps track of progress
  progress(){
    this.counter = this.data.progress;

    for(var i=1; i<this.amount-1; i++)
    {
      if(this.assignments[i].tasks.length == 1)
      {
          
          this.counter++;
      }
    }
    console.log("running", this.counter);
    return Math.round(this.counter * 14.28);
  }  
}

