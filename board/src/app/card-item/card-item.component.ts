import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() public item: Card;

  constructor() { }

  ngOnInit() {
  }

}
