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

}
