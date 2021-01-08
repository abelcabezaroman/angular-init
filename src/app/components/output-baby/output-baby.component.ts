import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-output-baby',
  templateUrl: './output-baby.component.html',
  styleUrls: ['./output-baby.component.scss']
})
export class OutputBabyComponent implements OnInit {

  @Output() iWantEatEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  iWantEat(){
    console.log('Muah muah!');
    this.iWantEatEmitter.emit();
  }

}
