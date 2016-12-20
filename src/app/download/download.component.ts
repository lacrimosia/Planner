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


getImageData(url, doc) {
    var image = new Image();
   image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

       canvas.getContext('2d').drawImage(this, 0, 0);

        // ... or get as Data URI
       let datas = canvas.toDataURL('image/jpeg');
      // console.log("datas-- ", datas);
       doc.addImage(datas, 20, 20, 30, 30);
       doc.save('TestingDocs.pdf');
      // doc.output('datauri');
  };
    image.src = url;

}

printPdf(){
  let doc = new jsPDF('portrait');
  this.getImageData("assets/images/11-5-04.jpg", doc);
}

}
