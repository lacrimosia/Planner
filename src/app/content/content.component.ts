import { Component, OnInit, Input, Output, AfterViewChecked} from '@angular/core';
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
export class ContentComponent implements OnInit, AfterViewChecked{

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
Month: any;
Day: any;
Percentage: any;
MAX: number = 15;
showAdd: boolean = true;

  constructor(private dataService: DataService, private _add: AddTaskService) { }

  ngOnInit() {
   
  }

  ngAfterViewChecked()
  {
    
  }

  changeIntroduction(i){
      this.data.course_title = this.appTitle;
      this.assignments[i].symbol = this.Symbol;
      this.assignments[i].title = this.QuestionTitle;
      this.assignments[0].instructions = this.Instructions;
  }

  goToQ(n){
  	this.data.value = n;
    this.clearFields();
  	if(n==this.amount-1){
  		this.data.print = true;
  	}else{
  		this.data.print = false;
  	}
  }

  getValue(i, symbol){
  	let name = 0;
    if(i==0 || i==this.data.assignments.length-1){
      name = symbol;
    }else{
      name = i;
    }
    return name;
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

addNewSlide(i){
    let data = {
        "type": "task",
        "title": "Assignment Title",
        "symbol": 1,
        "q": true,
        "t": true,
        "show": false,
        "sub_title": "Salami ham landjaeger",
        "tooltip": {
            "left": 82
        },
        "printTop": 0,
        "instructions": "Red Burgdoggen ribeye picanha ham hock, pastrami strip steak shank shankle doner filet mignon pork. Jowl strip steak porchetta pastrami. Beef short ribs tenderloin turkey. Pancetta ham hock frankfurter pork pastrami.",
        "due_date": [
            {
                "image": "10.jpg",
                "month": "December",
                "day": 5,
                "percentage": 10,
                "points": 0,
                "alert": false
            }
        ],
        "selected": 0,
        "tasks": [
            {
                "name": "Task",
                "title": "Assignment Title",
                "information": "Burgdoggen ribeye picanha ham hock, pastrami strip steak shank shankle doner filet mignon pork. Jowl strip steak porchetta pastrami. Beef short ribs tenderloin turkey. Pancetta ham hock frankfurter pork pastrami.",
                "select": true,
                "symbol": 2
            }
        ]
    };

    this.data.assignments.splice(i, 0, data); 
  }

  removeSlide(i)
  {  
    this.data.assignments.splice(i, 1);
  }

  addInfo(i){
    this.data.assignments[i].instructions = this.asstInformation;
  }

  getDate(i){
    this.data.assignments[i].due_date[0].month = this.Month;
    this.data.assignments[i].due_date[0].day = this.Day;
    this.data.assignments[i].due_date[0].percentage = this.Percentage;
  }

  goToStart()
  {
    this.data.value = -1;
  }

  clearFields()
  {
    this.appTitle = " ";
    this.QuestionTitle = " ";
    this.Instructions = "";
    this.asstInformation = "";
    this.Month = "";
    this.Day = " ";
    this.Percentage = "";
  }

  changeName(i)
  {
    if(i==this.data.assignments.length-1)
    {
      return 'Review';
    }else
    {
      return "Task " + parseInt(i+1);
    }
  }

}
