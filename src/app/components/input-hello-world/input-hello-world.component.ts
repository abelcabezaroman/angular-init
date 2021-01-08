import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-hello-world',
  templateUrl: './input-hello-world.component.html',
  styleUrls: ['./input-hello-world.component.scss']
})
export class InputHelloWorldComponent implements OnInit {

  @Input() name: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
