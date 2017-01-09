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
appTitle: string;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(){
  	this.data.course_title = this.appTitle;
  }

  goToQ(n){
  	this.data.value = n;
  }

}
