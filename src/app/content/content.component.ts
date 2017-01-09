import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

@Input() ui;
@Input() assignments;
@Input() data;
@Input() amount;
appTitle: string;
Symbol: string;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(){
  	this.data.course_title = this.appTitle;
  }

  changeSymbol(i){
  	this.assignments[i].symbol = this.Symbol;
  }

  goToQ(n){
  	this.data.value = n;
  	if(n==this.amount-1){
  		this.data.print = true;
  	}else{
  		this.data.print = false;
  	}
  }

  getValue(i){
  	let name = i;
  	if(name == 0 || name<this.amount-1){
  		return this.assignments[i].symbol;
  	}else{
  		return name;
  	}
  }

}
