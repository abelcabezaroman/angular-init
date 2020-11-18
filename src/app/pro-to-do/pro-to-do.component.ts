import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-to-do',
  templateUrl: './pro-to-do.component.html',
  styleUrls: ['./pro-to-do.component.scss']
})
export class ProToDoComponent implements OnInit {

  // toDoList = ['Sacar al perro', 'Lavar la ropa', 'Comprar comida', 'Ver Netflix']
  toDoList = [
    {
      task: 'Sacar al perro',
      isDone: true
    },
    {
      task: 'Lavar la ropa',
      isDone: false
    },
    {
      task: 'Comprar comida',
      isDone: false
    },
    {
      task: 'Ver Netflix',
      isDone: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(newTask){
    this.toDoList.push({task: newTask, isDone: false});
  }

  removeCompletedTasks(){
    for (let index = 0; index < this.toDoList.length; index++) {
      const task: any = this.toDoList[index];
      if(task.isDone){
        this.toDoList.splice(index, 1);
        index--;
      }
    } 
  }
}
