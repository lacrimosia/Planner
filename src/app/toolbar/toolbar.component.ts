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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  getMonoColorPalette(obj){
    let userColor = (<HTMLInputElement>document.getElementById(obj)).value;
    let getColors = tinycolor('#' + userColor).monochromatic();
    this.monoColors = getColors.map(function(t) { return t.toHexString(); });
   // console.log(monoColors);
    this.ui.colors.first = this.monoColors[1];
    this.ui.colors.second = this.monoColors[0];
    this.ui.colors.third = this.monoColors[4];
    this.ui.colors.fourth = this.monoColors[3];
    this.ui.buttons.color = this.monoColors[4];
    this.ui.buttons.hover = this.monoColors[3];
    this.ui.symbol.color = tinycolor(this.monoColors[0]).lighten(500).toString();
    this.ui.text.color = tinycolor(this.monoColors[4]).greyscale().toString();
    this.ui.subheadings.color = this.monoColors[4];
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
}
