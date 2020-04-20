import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   searchResult: Personne[];
  constructor() { }

  ngOnInit() {
    this.searchResult = [];
  }

  search(chaine) {
   console.log(chaine);
  }

  selectPersonne(personne: Personne) {
    console.log(personne);

  }

}
