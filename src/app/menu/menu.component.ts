import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import { CourseNameComponent } from '../course-name/course-name.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [DataService, HotkeysService]
})
export class MenuComponent implements OnInit {

  @Input() data;
  @Input() courseName;
  @Input() ui;
  closeResult: string;
  title: string;

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService, private modalService: NgbModal) { }

  ngOnInit() {
    // help keyboard shortcut
    this._hotkeysService.add(new Hotkey('h', (event: KeyboardEvent): boolean => {
          this.help();
            return false; // Prevent bubbling
    }));

    // reload keyboard shortcut
    this._hotkeysService.add(new Hotkey('r', (event: KeyboardEvent): boolean => {
          this.reload();
            return false; // Prevent bubbling
    }));

   // this.getTitle();
  }

  // reload function
  reload(){
    location.reload();
  }

  // help button
    help(){
      this.data.value = 0;
      this.data.print = false;
    }

     open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  colorType(type){
    if(type == "urban"){
      return this.ui.colors.third;
    }else if(type=="professional"){
      return this.ui.colors.second;
    }else if(type=="collaborative"){
      return this.ui.colors.first;
    }
  }

  getTitle()
  {
    this.dataService.getDBData()
    .subscribe(
      data => {
        this.title = data;
      },
      err => console.log("Error in get: " + err),
      () => console.log("Received data successfully")
    );

  }

}
