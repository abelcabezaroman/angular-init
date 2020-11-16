import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {

  name: string = 'Abel Cabeza Román';
  
  constructor() { }

  ngOnInit(): void {
  }

}
