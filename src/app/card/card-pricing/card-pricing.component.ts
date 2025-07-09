import { Component, Input } from '@angular/core';
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

	@Input()
	itemName: String = "O Grito";

	@Input()
	itemAvailable: String = "Disponível";

	@Input()
	itemArtista: String = "Edvard Munch "

}
