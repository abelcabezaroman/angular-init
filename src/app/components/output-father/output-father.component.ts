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

  feedBaby() {
    console.log('Dando de comer');
  }

}
