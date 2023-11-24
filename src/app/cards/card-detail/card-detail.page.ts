import { Component, OnInit } from '@angular/core';
import { Card, CardDetail, CardList } from '../card-list';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRoute,
  Router,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  api = 'https://api.magicthegathering.io/v1/cards';
  card!: Card;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    await this.carregarDados();
  }
  async carregarDados() {
    let id = this.route.snapshot.paramMap.get('id');

    this.card = await this.http
      .get<CardDetail>(this.api + '/' + id)
      .toPromise().then(x=>x!.card);
  }
  async voltar(){
  this.router.navigate(["/"])

  }
}
