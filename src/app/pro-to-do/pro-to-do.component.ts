import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-to-do',
  templateUrl: './pro-to-do.component.html',
  styleUrls: ['./pro-to-do.component.scss']
})
export class ProToDoComponent implements OnInit {

  toDoList = ['Sacar al perro', 'Lavar la ropa', 'Comprar comida', 'Ver Netflix']

  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(newTask){
    this.toDoList.push(newTask);
  }

}
