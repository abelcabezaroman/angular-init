import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-filtered-list',
  templateUrl: './countries-filtered-list.component.html',
  styleUrls: ['./countries-filtered-list.component.scss']
})
export class CountriesFilteredListComponent implements OnInit {

  @Input() countries;
  constructor() { }

  ngOnInit(): void {
  }

}
