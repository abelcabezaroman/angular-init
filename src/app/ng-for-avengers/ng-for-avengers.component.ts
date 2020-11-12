import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-avengers',
  templateUrl: './ng-for-avengers.component.html',
  styleUrls: ['./ng-for-avengers.component.scss']
})
export class NgForAvengersComponent implements OnInit {

  avengers: string[] = ['Spiderman','Iron-man', 'Hulk', 'Thor']

  constructor() { }

  ngOnInit(): void {
  }

}
