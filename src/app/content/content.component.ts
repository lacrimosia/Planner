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
QuestionTitle: string;
Instructions: string;

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

  getValue(i, symbol){
  	let name = 0;
    if(i==0 || i==this.amount-1){
      name = symbol;
    }else{
      name = i;
    }
    return name;
  }

  changeQ(i){
  	this.assignments[i].title = this.QuestionTitle;
  }

  addInstructions(){
    this.assignments[0].instructions = this.Instructions;
  }

}
