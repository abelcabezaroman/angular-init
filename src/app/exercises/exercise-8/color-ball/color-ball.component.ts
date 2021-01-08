import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-ball',
  templateUrl: './color-ball.component.html',
  styleUrls: ['./color-ball.component.scss']
})
export class ColorBallComponent implements OnInit {

  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
