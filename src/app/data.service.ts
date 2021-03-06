import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
public show;
public value: number;

  constructor(private http: Http) {
    this.value = 0;
  }

  getData(data) {
  	 return this.http.get(data)
  	       .map((res:Response) => res.json());
  }

  sendData(data): Observable<Object>{
    // let url = "http://localhost/customPlanner/server/update.php";
  	let url = "http://courses.online.unlv.edu/courses/URST/planner/server/update.php";
  	 let encoded_data = JSON.stringify(data);
  	  // console.log('encoded', encoded_data);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, encoded_data).map(
            (res: Response) => res.json()
        );
  }

}
