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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  changeFirstColor(obj){
    let color = document.getElementById(obj).innerHTML;
   // let getColor = tinycolor('#' + color);
     this.ui.colors.first = "#" + color;
    // let colors = tinycolor("#" + color).analogous();;
    // let triadColors = colors.map(function(t) { return t.toHexString(); });
    // console.log("triad", triadColors);

    // this.ui.colors.first = triadColors[1];
   // let complementaryColor = getColor.complement().toHexString();
   // console.log("colors", complementaryColor);
   // this.ui.colors.first = complementaryColor;
  }

  changeSecondColor(obj){
  	let color = document.getElementById(obj).innerHTML;
  	this.ui.colors.second = "#" + color;
  }

  changeThirdColor(obj){
  	let color = document.getElementById(obj).innerHTML;
  	this.ui.colors.third = "#" + color;
    console.log(this.ui.colors.third);
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
