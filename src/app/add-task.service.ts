import { Injectable } from '@angular/core';

@Injectable()
export class AddTaskService {

  constructor() { }

  addTask(arr, data){
  	arr.push(data);
  	console.log("data", arr);
  }

  getTasks(arr){
  	console.log("tasks", arr);
  	return arr;
  }

}
