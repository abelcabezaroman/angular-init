import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-fruits',
  templateUrl: './ng-class-fruits.component.html',
  styleUrls: ['./ng-class-fruits.component.scss']
})
export class NgClassFruitsComponent implements OnInit {

  fruit1: string = 'Banana';
  fruit2: string = 'Orange';
  fruit3: string = 'Strawberry';
  
  constructor() { }

  ngOnInit(): void {
  }

}
