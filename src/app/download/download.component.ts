import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import * as jsPDF from 'jspdf';
import * as canvg from 'canvg-fixed';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  providers: [DataService, HotkeysService]
})
export class DownloadComponent implements OnInit {

  @Input() data;
  @Input() amount;
  @Input() assignments;
  @Input() alert;
  downloaded:boolean = true;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) {
  }

  ngOnInit() {
    // Print pdf
    this._hotkeysService.add(new Hotkey('p', (event: KeyboardEvent): boolean => {
        this.printPdf();
        return false; // Prevent bubbling
    }));

    this._hotkeysService.add(new Hotkey('enter', (event: KeyboardEvent): boolean => {
        this.data.alert = false;
        return false; // Prevent bubbling
    }));
  }


svgtoBase64(url, callback) {

}

printPdf(){
  
}

}
