import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-score',
  templateUrl: './ng-class-score.component.html',
  styleUrls: ['./ng-class-score.component.scss']
})
export class NgClassScoreComponent implements OnInit {

  @Input() students;

  constructor() { }

  ngOnInit(): void {
  }

}
