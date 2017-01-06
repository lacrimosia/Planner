import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [DataService, HotkeysService]
})
export class SelectComponent implements OnInit {
  @Input() assignments;
  @Input() data;
  @Input() amount;
  @Input() value;
  @Input() d;
  @Input() t;
  @Input() index;
  @Input() ui;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) {
  }

  ngOnInit() {
    // select A for the option A task
    this._hotkeysService.add(new Hotkey('a', (event: KeyboardEvent): boolean => {
        if(this.d.value.type=="two"){
            this.selectionClick();
            return;
        }
        return false; // Prevent bubbling
    }));
  }

  // toggle buttons for selection on each task
  // d is the outer loop
  // t is the inner loop
  selectionClick(){
    this.d.value.selected++;
    for(var i=0; i<this.d.value.tasks.length; i++){   
      if(i==this.index){
        this.d.value.tasks[i].select = true;
      }else{
        this.d.value.tasks[i].select = false;
      }
    }

    if(this.d.value.selected == 1){
      this.data.progress++;
    }
    return;
  }

  buttonColor(selection){
      if(selection == true){
        return this.ui.buttons.hover;
    }else{
        return this.ui.buttons.color;
    }
  }
}
