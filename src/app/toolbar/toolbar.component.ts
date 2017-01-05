import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [DataService]
})
export class ToolbarComponent implements OnInit {

  @Input() ui;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
