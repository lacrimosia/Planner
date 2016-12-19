import { Component, OnInit, Input} from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.scss'],
  providers: [DataService, HotkeysService]
})
export class OneTaskComponent implements OnInit {

  @Input() data;
  @Input() assignments;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) { }

  ngOnInit() {
  }

}
