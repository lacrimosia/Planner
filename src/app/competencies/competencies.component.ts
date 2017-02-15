import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.scss'],
  providers: [DataService]
})
export class CompetenciesComponent implements OnInit {

	@Input() data;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
