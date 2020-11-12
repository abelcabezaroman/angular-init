import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {

  name:string = 'Abel Cabeza Román';

  imgUrl: string = 'https://s2.eestatic.com/2019/05/17/social/La_Jungla_399220954_123067375_1024x576.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
