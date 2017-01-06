import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [DataService]
})
export class ToolbarComponent implements OnInit {

  @Input() ui;
  file: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  changeFirstColor(obj){
    let color = document.getElementById(obj).innerHTML;
    this.ui.colors.first = "#" + color;
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
  	let color = document.getElementById(obj).innerHTML;
  	this.ui.text.color = "#" + color;
  }

  changeBackgroundImage(obj){
    let img = (<HTMLInputElement>document.getElementById(obj)).value;
    this.ui.image.url = img;
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

}
