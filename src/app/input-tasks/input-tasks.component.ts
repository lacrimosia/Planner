import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-input-tasks',
  templateUrl: './input-tasks.component.html',
  styleUrls: ['./input-tasks.component.scss'],
  providers: [DataService]
})
export class InputTasksComponent implements OnInit {

 @Input() c;
 @Input() i;
 @Input() data;
 @Input() arr;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  removeTask(i)
  {
  	this.arr.splice(i, 1);
  }

}
