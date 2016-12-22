import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  providers: [DataService, HotkeysService, ValueService]
})
export class HeadingComponent implements OnInit {
  @Input() data;
  @Input() assignments;
  @Input() value;
  @Input() valueChanged;
  @Input() amount;
  title:string;
  symbol:any;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService, public valueService: ValueService) {

   }

  ngOnInit() {
  }

// Output the symbol if first value and the last value
// Otherwise output the number of the value
  headingOutput(i, symbol){
    let name = 0;
    if(i==0 || i==this.amount-1){
      name = symbol;
    }else{
      name = i;
    }
    return name;
  }

}
