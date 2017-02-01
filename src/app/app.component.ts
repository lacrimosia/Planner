import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { DataService} from './data.service';
import { RequestService} from './request.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from './keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import * as jsPDF from 'jspdf';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService, HotkeysService, RequestService]
})
export class AppComponent implements OnInit{
  constructor()
  {
    
  }
  ngOnInit()
  {

  }
}
