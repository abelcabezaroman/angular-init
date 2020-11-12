import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-over',
  templateUrl: './ng-if-over.component.html',
  styleUrls: ['./ng-if-over.component.scss']
})
export class NgIfOverComponent implements OnInit {

  age: number = 18;
  
  constructor() { }

  ngOnInit(): void {
  }

}
