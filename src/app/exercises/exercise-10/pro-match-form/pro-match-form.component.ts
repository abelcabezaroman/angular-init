import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-match-form',
  templateUrl: './pro-match-form.component.html',
  styleUrls: ['./pro-match-form.component.scss']
})
export class ProMatchFormComponent implements OnInit {

  newMatch = {}

  @Output() addMatchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addMatchEmit(){
    this.addMatchEmitter.emit(this.newMatch);
    this.newMatch = {};
  }

}
