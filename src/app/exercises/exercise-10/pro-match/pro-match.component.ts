import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-match',
  templateUrl: './pro-match.component.html',
  styleUrls: ['./pro-match.component.scss']
})
export class ProMatchComponent implements OnInit {

  matches = [
    {
      team1: 'G2',
      team2: 'Danwon',
      score: '1-3'
    },
    {
      team1: 'Fnatic',
      team2: 'Sunning',
      score: '2-3'
    },
    {
      team1: 'FPX',
      team2: 'G2',
      score: '3-0'
    },
    {
      team1: 'Mad Lions',
      team2: 'Vodafone Giants',
      score: '3-1'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  removeMatch(index){
    this.matches.splice(index, 1);
  }

}
