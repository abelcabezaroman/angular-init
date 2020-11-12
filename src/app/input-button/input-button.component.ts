import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {

  @Input() text: string = 'Send';

  constructor() { }

  ngOnInit(): void {
  }

}
