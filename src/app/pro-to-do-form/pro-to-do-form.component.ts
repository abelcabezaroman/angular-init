import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-to-do-form',
  templateUrl: './pro-to-do-form.component.html',
  styleUrls: ['./pro-to-do-form.component.scss']
})
export class ProToDoFormComponent implements OnInit {

  newTask: string;

  @Output() addNewTaskEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewTaskEmit(){
    this.addNewTaskEmitter.emit(this.newTask);
    this.newTask = '';
  }

}
