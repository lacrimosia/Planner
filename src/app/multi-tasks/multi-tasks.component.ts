import { Component, OnInit, Input, OnChanges, DoCheck} from '@angular/core';
import { DataService} from '../data.service';
import { AddTaskService } from '../add-task.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-multi-tasks',
  templateUrl: './multi-tasks.component.html',
  styleUrls: ['./multi-tasks.component.scss'],
  providers: [DataService, HotkeysService, AddTaskService]
})
export class MultiTasksComponent implements OnChanges, OnInit, DoCheck {

  @Input() data;
  @Input() assignments;
  @Input() ui;
  @Input() t;
  @Input() index;
  arr: any;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService, private _add: AddTaskService) { }

  ngOnChanges() {
    
  }

  ngOnInit(){

  }

  ngDoCheck(){
   // this._add.addTask(this.assignments[this.data.value].tasks, {name: "Hello", information: "helloewewedw", select: false});
  }

}
