import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-match-filter',
  templateUrl: './pro-match-filter.component.html',
  styleUrls: ['./pro-match-filter.component.scss']
})
export class ProMatchFilterComponent implements OnInit {

  filter: string;

  @Output() filterEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filterEmit(){
    this.filterEmitter.emit(this.filter);
  }

}
