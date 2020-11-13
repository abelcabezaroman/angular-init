import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-galaxy',
  templateUrl: './pro-galaxy.component.html',
  styleUrls: ['./pro-galaxy.component.scss']
})
export class ProGalaxyComponent implements OnInit {

  galaxyList = [
    {
      name: 'Marte',
      distance: '227,9 millones km',
      gravity: '3,711 m/s²',
      surface: '144,8 millones km²',
      imgUrl: 'https://www.elcomercio.com/files/og_thumbnail/uploads/2020/08/08/5f2f422ed2150.jpeg'
    },
    {
      name: 'Venus',
      distance: '108,2 millones km',
      gravity: '8,87 m/s²',
      surface: '460,2 millones km²',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg'
    },
    {
      name: 'De agostini',
      distance: '187421982,9 millones km',
      gravity: '12412,711 m/s²',
      surface: '974823721,8 millones km²',
      imgUrl: 'https://www.esteoestestudio.com/archivos/planeta-deagostini-g_150419125549.jpg'
    },
    {
      name: 'Mercurio',
      distance: '57,91 millones km',
      gravity: '3,7 m/s²',
      surface: '74,8 millones km²',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  removePlanet(index){
    this.galaxyList.splice(index,1)
  }

}
