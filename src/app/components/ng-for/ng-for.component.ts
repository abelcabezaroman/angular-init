import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  fruits = ['Fresa', 'Manzana', 'Pera', 'Mango'];

  constructor() { }

  ngOnInit(): void {
  }

}
