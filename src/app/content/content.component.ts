import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [DataService]
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
tasksAmount: number = 0;
OneTaskTitle: string;
name:any = "Name here";

  constructor(private dataService: DataService) { }

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

  getTask(task, taskA){
    if(task == 1){
      //this.addTask(taskA);
    }else{

    }
  }

  addTask(){
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
