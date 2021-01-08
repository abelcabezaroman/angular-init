import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-angular-project';
  name: string = 'Abel';
  imgUrl: string = 'https://www.staticjbx.com/images/blog/82697/82697_desktop_e9b93358950b49e6ace0c6abdee5368d_photo.jpg'

  card1 = {
    title: 'Soy un titulo molon',
    imgUrl: 'https://www.ef.com/sitecore/__/~/media/universal/pg/8x5/destination/US_US-NY_NYC_1.jpg',
    pText: 'Soy un parrafo de prueba mira como me muestro por aqui y por allá',
    buttonText: 'Visitar',
  };

  card2 = {
    title: 'Este sitio Bali mucho',
    imgUrl: 'https://viajes.nationalgeographic.com.es/medio/2019/01/30/lkf-339485_fbe9d139_1200x630.jpg',
    pText: 'Soy un parrafo de prueba mira como me muestro por aqui y por allá',
    buttonText: 'Baliando',
  }

  countries = [
    { name: 'Japón', population: 90000000 },
    { name: 'España', population: 40000000 },
    { name: 'Italia', population: 50000000 },
    { name: 'Venezuela', population: 30000000 },
    { name: 'Indonesia', population: 20000000 }
  ];

  students1 = [
    { name: 'Julia', score: 9 },
    { name: 'Pedro', score: 8 },
    { name: 'Samuel', score: 4 },
    { name: 'Luis', score: 10 },
    { name: 'Alejandro', score: 7 },
    { name: 'Lucia', score: 2 },
  ];

  students2 = [
    { name: 'Samantha', score: 4 },
    { name: 'Luisa', score: 9 },
    { name: 'Andres', score: 5 },
    { name: 'Juan', score: 6 },
    { name: 'Calamardo', score: 2 },
    { name: 'Bob', score: 5 },
  ];

  persons = [
    { name: 'Paco', isThief: false },
    { name: 'Paloma', isThief: true },
    { name: 'Juana', isThief: false },
    { name: 'Alfredo', isThief: false },
    { name: 'Ramiro', isThief: true },
  ]
}
