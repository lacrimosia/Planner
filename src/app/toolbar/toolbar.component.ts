import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service'; 
let tinycolor = require("tinycolor2");

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [DataService]
})
export class ToolbarComponent implements OnInit {

  @Input() ui;
  file: any;
  error:boolean = false;
  monoColors: any = [];
  analoColors: any = [];
  darkColor: string;
  compColor: string;
  oppositeColor: string;
  lightenColor: string;
  @Input() assignments;
  @Input() data;
  @Input() amount;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {

  }

  getAnalogousColorPalette(obj){
    let userColor = (<HTMLInputElement>document.getElementById(obj)).value;
    let getColors = tinycolor('#' + userColor).monochromatic();

    this.analoColors = getColors.map(function(t) { return t.toHexString(); });
    this.darkColor = this.analoColors[1];
    this.oppositeColor = this.analoColors[4];
    this.compColor = this.analoColors[3];
    this.lightenColor = this.analoColors[2];

    this.ui.colors.first = this.darkColor;
    this.ui.colors.second = this.analoColors[0];
    this.ui.colors.third = tinycolor(this.analoColors[3]).darken(10).toString();
    this.ui.colors.fourth = this.analoColors[3];
    this.ui.buttons.color =  this.lightenColor;
    this.ui.buttons.hover = this.oppositeColor;
    this.ui.symbol.color = tinycolor(this.analoColors[0]).lighten(100).toString();
    this.ui.text.color = tinycolor(this.analoColors[4]).greyscale().toString();
    this.ui.subheadings.color = tinycolor(this.analoColors[4]).darken(50).toString();
  }

  getIndividualColors(num, obj){
    let color = (<HTMLInputElement>document.getElementById(obj)).value;
    switch(num){
      case 'bar':
        this.ui.colors.first = '#' + color;
        break;
      case 'buttons':
        this.ui.buttons.color = '#' + color;
        break;
      case 'hover':
        this.ui.buttons.hover = '#' + color;
        this.ui.colors.third = '#' + color;
        break;
      case 'heading':
        this.ui.colors.fourth = '#' + color;
        break;
    }
  }

  changeTextColor(obj){
  	let color = (<HTMLInputElement>document.getElementById(obj)).value;
  	this.ui.text.color = "#" + color;
  }


  changeBackgroundImage(obj){
    let img = (<HTMLInputElement>document.getElementById(obj)).value;
    if(img == ""){
      this.error = true;
    }else{
      this.error = false;
      this.ui.image.url = img;
    } 
  }

  clearText(obj){
    let img = (<HTMLInputElement>document.getElementById(obj)).value;
    img = "";
  }

  openBrowse(event: EventTarget){
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
   console.log(this.file.name);
   this.ui.image.url = this.file.name;
   //browser wont allow full path due to security issues
  }

  changeHeadingsColor(obj){
    let headingColor = (<HTMLInputElement>document.getElementById(obj)).value;
    this.ui.heading.color = "#" + headingColor;
  }

  // Save all data and overwrite json file
  saveToFile(){
  this.dataService.sendData(this.data)
     .subscribe(
         data => {
           console.log('the data', data);
         },
         (err) => console.log('Error: ', err),
         () => console.log("data success!!")
       );
  }
}
