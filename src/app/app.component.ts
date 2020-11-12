import { Component } from '@angular/core';

interface GalleryList{
  imgUrl: string;
  title: string
}

interface Person{
  name: string;
  age: number;
  role: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-to-destroy';

  ngForGalleryList: GalleryList[] = [
    {
      imgUrl: 'https://www.elagoradiario.com/wp-content/uploads/2020/06/Retrato-corto-de-una-peque%C3%B1a-nutria-asi%C3%A1tica-u-oriental-Aonyx-cinerea-Gary-Perkin-1024x683.jpg',
      title: 'Titulo de prueba'
    },
    {
      imgUrl: 'https://www.elagoradiario.com/wp-content/uploads/2020/06/Retrato-corto-de-una-peque%C3%B1a-nutria-asi%C3%A1tica-u-oriental-Aonyx-cinerea-Gary-Perkin-1024x683.jpg',
      title: 'Titulo de prueba'
    },
    {
      imgUrl: 'https://www.elagoradiario.com/wp-content/uploads/2020/06/Retrato-corto-de-una-peque%C3%B1a-nutria-asi%C3%A1tica-u-oriental-Aonyx-cinerea-Gary-Perkin-1024x683.jpg',
      title: 'Titulo de prueba'
    }
  ]

  ngForPersonList: Person[] = [
    {
      name: 'Abel Cabeza Román',
      age: 99,
      role: 'Profesor'
    },
    {
      name: 'Don Quijote',
      age: 460,
      role: 'Caballero'
    },
    {
      name: 'Sancho Panza',
      age: 454,
      role: 'Escudero'
    }
  ]
}
