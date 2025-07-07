import { Component } from '@angular/core';
import { CardPricingComponent } from "./card-pricing/card-pricing.component";
import { CardPrecoComponent } from "./card-preco/card-preco.component";

@Component({
  selector: 'app-card',
  imports: [CardPricingComponent, CardPrecoComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
