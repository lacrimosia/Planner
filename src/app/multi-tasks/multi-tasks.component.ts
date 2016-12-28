import { Component, OnInit, Input} from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-multi-tasks',
  templateUrl: './multi-tasks.component.html',
  styleUrls: ['./multi-tasks.component.scss'],
  providers: [DataService, HotkeysService]
})
export class MultiTasksComponent implements OnInit {

  @Input() data;
  @Input() assignments;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) { }

  ngOnInit() {
  	
  }

}
