import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thiefs',
  templateUrl: './thiefs.component.html',
  styleUrls: ['./thiefs.component.scss']
})
export class ThiefsComponent implements OnInit {

  @Input() persons;

  constructor() { }

  ngOnInit(): void {
  }

  isThief(person){
    alert(person.name + (person.isThief ? ' es un ladrón/ladrona' : ' no es un ladrón/ladrona'));
  }

}
