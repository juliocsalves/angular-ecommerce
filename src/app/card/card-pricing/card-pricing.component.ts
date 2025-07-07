import { Component } from '@angular/core';
import { CardNameComponent } from "../card-name/card-name.component";
import { CardArtistComponent } from "../card-artist/card-artist.component";
import { CardAvailableComponent } from "../card-available/card-available.component";

@Component({
  selector: 'app-card-pricing',
  imports: [CardNameComponent, CardArtistComponent, CardAvailableComponent],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {

}
