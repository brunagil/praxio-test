import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {
  @Input() cardPosition: string;

  classByPosition() {
    const cardClasses = {
      left: 'card_left',
      center: 'card_center',
      right: 'card_right'
  }
  return cardClasses[this.cardPosition];
  }
}