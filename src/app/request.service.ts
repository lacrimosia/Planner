import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  constructor(private http: Http) { }

// run a test get request from the test api to check if working
// returns an observable (observes changes in the state), then subscribes
// returns response observable to json
  getSomeData(){
  	return this.http.get('http://date.jsontest.com')
  		.map(res => res.json());
  		// returns an observable
  }

 // do the post data test request
 postSomeData(){
 	let url = 'http://localhost/testingPHP/test.php';
 	let text = JSON.stringify({
 		name: "Shatilla"
 	});
 	let headers = new Headers();
 	headers.append('Content-Type', 'application/json; charset=utf-8');
 	return this.http.post(url, text, headers)
 			.map(res => res.json());
 }

}
