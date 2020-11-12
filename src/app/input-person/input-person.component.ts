import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-person',
  templateUrl: './input-person.component.html',
  styleUrls: ['./input-person.component.scss']
})
export class InputPersonComponent implements OnInit {

  @Input() infoPerson: {name: string, age: number, role: string};
  constructor() { }

  ngOnInit(): void {
  }

}
