import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Object;
  clientId: string = 'M37xARRD2X';
  catanSearchUrl: string = 'https://www.boardgameatlas.com/api/search?name=Catan&client_id=' + this.clientId;


  constructor() { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      const response = await fetch(this.catanSearchUrl);

      if(response.ok) {
        const jsonResponse = await response.json();
        this.games = jsonResponse.games;
      }
    } catch(err) {
      console.log(err);
    }
  }
}
