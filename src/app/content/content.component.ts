import { Component, OnInit, Input, Output, DoCheck} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { DataService} from '../data.service';
import { AddTaskService } from '../add-task.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [DataService, AddTaskService]
})
export class ContentComponent implements OnInit, DoCheck {

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
asstInformation: string;
Month: number;
Day: number;
Percentage: number;

  constructor(private dataService: DataService, private _add: AddTaskService) { }

  ngOnInit() {
  }

  ngDoCheck() {

  }


  changeIntroduction(i){
      this.data.course_title = this.appTitle;
      this.assignments[i].symbol = this.Symbol;
      this.assignments[i].title = this.QuestionTitle;
      this.assignments[0].instructions = this.Instructions;
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

  addTasksToPlanner(i){
    let data = {
                name: "Mock Assignment",
                title: "Assignment",
                information: "Burgdoggen ribeye picanha ham hock, pastrami strip steak shank shankle doner filet mignon pork. Jowl strip steak porchetta pastrami. Beef short ribs tenderloin turkey. Pancetta ham hock frankfurter pork pastrami.",
                select: false,
                symbol: i
              };

     this.data.assignments[i].tasks.push(data);
     //console.log("tasks", this.data.assignments[i]);
  }

  addInfo(i){
    this.assignments[i].instructions = this.asstInformation;
  }

  getDate(i){
    this.assignments[i].due_date[0].month = this.Month;
    this.assignments[i].due_date[0].day = this.Day;
    this.assignments[i].due_date[0].percentage = this.Percentage;
  }

}
