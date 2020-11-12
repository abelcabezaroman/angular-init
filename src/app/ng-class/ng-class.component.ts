import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  isOk: boolean = true;

  age = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
