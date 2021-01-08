import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-father',
  templateUrl: './output-father.component.html',
  styleUrls: ['./output-father.component.scss']
})
export class OutputFatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  feedBaby($event) {
    console.log($event);
    console.log('Dando de comer');
  }

}
