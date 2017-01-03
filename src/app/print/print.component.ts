import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
  providers: [DataService, HotkeysService]
})
export class PrintComponent implements OnInit {
  @Input() data;
  @Input() amount;
  @Input() d;
  @Input() assignments;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService, private http: Http) { }

  ngOnInit() {
  }

  imageSrc(pic){
    return "assets/images/" + pic;
  }

  goTo(index){
    this.data.value = index;
    if(this.data.value == this.assignments.length-1){
      this.printContent();
    }else{
      this.hidePrintContent();
    }
  }

  printContent(){
    this.data.print = true;
    // If any of the buttons have not been selected, trigger error message
    // If they user selects all the assignments, then the print area becomes visible
    // loop goes through 1-7
    // It only checks types that have two answers
    for(let x=1; x<=this.data.assignments.length-2; x++){
      // check if category type is the two choices
      if(this.data.assignments[x].type=="two"){
        // then check if both selectA and selectB is false
        // this ensures they actually select something
        if(this.data.assignments[x].taskA.selectA == false && this.data.assignments[x].taskB.selectB==false){
          this.data.error.open = true;
          this.data.value = 2;
          this.hidePrintContent();
        }else{
          this.data.error.open = false;
        }
      }
    }
  }

  // hide the print area
  hidePrintContent(){
    this.data.print = false;
  }

 postData(title, textA, textB) {
    let body = JSON.stringify({ title: title,  textA: textA, textB: textB });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(body);
    console.log(options);

    return this.http.post('http://localhost:4500/', body, options)
              .map(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
