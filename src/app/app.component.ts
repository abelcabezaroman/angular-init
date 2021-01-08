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
}
