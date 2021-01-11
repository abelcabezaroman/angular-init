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

  filterText;

  filteredMatches = this.matches;

  constructor() { }

  ngOnInit(): void {
  }

  removeMatch(index) {
    this.matches.splice(index, 1);
    this.filterMatch(this.filterText);
  }

  addMatch(newMatch) {
    this.matches.push(newMatch);
    this.filterMatch(this.filterText);
  }

  filterMatch(textToFilter) {
    this.filterText = textToFilter;
    this.filteredMatches = this.matches.filter(match => match.team1.toLowerCase().includes(this.filterText.toLowerCase()) || match.team2.toLowerCase().includes(this.filterText.toLowerCase()))
  }

}
