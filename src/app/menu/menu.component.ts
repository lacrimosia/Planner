import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import {KeysPipe} from '../keys.pipe';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import { CourseNameComponent } from '../course-name/course-name.component';

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

  constructor(private dataService: DataService, private _hotkeysService: HotkeysService) { }

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

  colorType(type){
    if(type == "urban"){
      return this.ui.colors.third;
    }else if(type=="professional"){
      return this.ui.colors.second;
    }else if(type=="collaborative"){
      return this.ui.colors.first;
    }
  }

}
