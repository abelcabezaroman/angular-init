import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-galaxy-list',
  templateUrl: './pro-galaxy-list.component.html',
  styleUrls: ['./pro-galaxy-list.component.scss']
})
export class ProGalaxyListComponent implements OnInit {

  @Input() galaxyList;
  @Output() removePlanetEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removePlanet(index){
    this.removePlanetEmitter.emit(index)
  }

}
