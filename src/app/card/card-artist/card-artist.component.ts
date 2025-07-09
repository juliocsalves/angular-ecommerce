import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-artist',
  imports: [],
  templateUrl: './card-artist.component.html',
  styleUrl: './card-artist.component.css'
})
export class CardArtistComponent {

	@Input()
	itemArtista:String = "Edvard Munch"

}
