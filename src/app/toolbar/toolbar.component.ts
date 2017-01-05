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
  }

  changeTextColor(obj){
  	let color = document.getElementById(obj).innerHTML;
  	this.ui.text.color = "#" + color;
  }

}
