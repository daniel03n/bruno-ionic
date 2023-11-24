import { Component, OnInit } from '@angular/core';
import { Card, CardList } from '../card-list';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit
 {
  page = 1;
  api = 'https://api.magicthegathering.io/v1/cards?page=';
  cards!: Card[];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<CardList>(this.api+this.page).subscribe((x: CardList) => {
      this.cards = x.cards;
      console.log(this.cards);
    });
  }
  abrirCard(card: Card) {
    this.router.navigate(['/cards/card-detail/' + card.id]);
  }

  async carregar(){
    this.page++
    this.http.get<CardList>(this.api+this.page).subscribe((x: CardList) => {
      x.cards.forEach(teste => this.cards.push(teste))

      console.log(this.cards);
    })
}
}
