import { Component, Input, OnInit } from '@angular/core';

interface Person{
  name: string;
  age: number;
  role: string
}

@Component({
  selector: 'app-ng-for-input-person',
  templateUrl: './ng-for-input-person.component.html',
  styleUrls: ['./ng-for-input-person.component.scss']
})
export class NgForInputPersonComponent implements OnInit {

  @Input() personList: Person[];

  constructor() { }

  ngOnInit(): void {
  }

}
