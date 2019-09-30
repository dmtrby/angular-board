import { Component, OnInit, Input } from '@angular/core';
import { CardList } from '../models/CardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() public card: CardList;

  constructor() { }

  ngOnInit() {
  }

}
