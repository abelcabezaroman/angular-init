import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-galaxy-form',
  templateUrl: './pro-galaxy-form.component.html',
  styleUrls: ['./pro-galaxy-form.component.scss']
})
export class ProGalaxyFormComponent implements OnInit {

  planet = {
    name: '',
    distance: '',
    gravity: '',
    surface: '',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg',
  }

  @Output() addPlanetEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addPlanetEmit(){
    this.addPlanetEmitter.emit(this.planet);
  }

}
