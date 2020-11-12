import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() imgAlt: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
