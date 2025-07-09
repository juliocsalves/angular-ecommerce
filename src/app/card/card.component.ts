import { Component, Input } from '@angular/core';
import { CardPrecoComponent } from './card-preco/card-preco.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardPrecoComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  itemCover: string = 'assets/image/o-grito.jpg';

  @Input()
  itemPreco: string = 'R$ 11.000,00'; // ← string formatada
}
