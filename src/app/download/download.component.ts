import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import * as jsPDF from 'jspdf';
let tinycolor = require("tinycolor2");

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
  @Input() ui;

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

printPdf()
{
  let doc = new jsPDF('portrait','pt','a4');
  let data = this.assignments;
  let info = this.data;
  let amount = this.amount;
  // let start = 130;
  let pageHeight = doc.internal.pageSize.height;
  let start = 100;
  let textWidth = 700;
  let imageThumb = 40;
  let splitTitle, optionName;
  let x = 0;

  doc.setFontSize(20);
  doc.text(20, 50, this.data.course_title);
  let p = 0;
while(p<21)
{
    // each entry for page
   for(x=p; x<amount-(p+1); x++){
      doc.setFontSize(16);
      let startingPointVal = ((x+1)*start);

      // green shape ellipse
      let shapeColor = tinycolor(this.ui.colors.first);
      // convert hex to rgb
      let fillColor = shapeColor.toRgb();
      doc.setFillColor(fillColor.r,fillColor.g,fillColor.b);
      doc.ellipse(20, startingPointVal-5, 10, 10, 'F');

      // The number of the item inside of the ellipse
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.text(16, startingPointVal, (x+1).toString());

      // title information
      doc.setTextColor(fillColor.r,fillColor.g,fillColor.b);
      doc.text(40, startingPointVal, data[x].title);

      // only display if task is selected
      for(var t=0; t<data[x].tasks.length; t++)
      {
        if(data[x].tasks[t].select == true)
        {
          optionName = doc.splitTextToSize("Selected Task: "+ data[x].tasks[t].name +" --- Due Date: "+ data[x].due_date[0].month +" "+ data[x].due_date[0].day+" Percentage: "+data[x].due_date[0].percentage, textWidth);
          splitTitle = doc.splitTextToSize(data[x].tasks[t].information, textWidth);
        }
      }

    // title and due date
    doc.setFontSize(12);
    doc.setTextColor(77,77,77);
    doc.text(60, (startingPointVal + 20), optionName);

    // data information
    doc.setFontSize(10);
    doc.setTextColor(77,77,77);
    doc.text(60, (startingPointVal + 40), splitTitle);
    } 
    p+=5;
    doc.addPage();
  }

    doc.save('Course_Planner.pdf');
  }
  
}
