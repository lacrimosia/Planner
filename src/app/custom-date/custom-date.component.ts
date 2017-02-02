import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.scss'],
  providers: [DataService, HotkeysService]
})
export class CustomDateComponent implements OnInit {

  @Input() value;
  @Input() amount;
  @Input() assignments;
  @Input() ui;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) {
  }

  ngOnInit() {

  }

  imageSrc(picture){
    return "assets/images/" + picture;
  }
}
