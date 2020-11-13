import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-button',
  templateUrl: './output-button.component.html',
  styleUrls: ['./output-button.component.scss']
})
export class OutputButtonComponent implements OnInit {

  @Output() clickEmitter = new EventEmitter();
  @Output() dblClickEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  alertMe(){
    console.log('Aviso hijo');
    this.clickEmitter.emit('PAPAAA');
  }
  
  alertMeDbl(){
    console.log('Aviso hijo');
    this.dblClickEmitter.emit('PAPAAA');
  }

}
