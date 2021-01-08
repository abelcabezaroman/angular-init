import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {

  @Input() card: CardIterface;

  constructor() { }

  ngOnInit(): void {
  }

}

interface CardIterface { title: string; pText: string; imgUrl: string; buttonText: string }