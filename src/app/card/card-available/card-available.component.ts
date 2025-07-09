import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-available',
  imports: [],
  templateUrl: './card-available.component.html',
  styleUrl: './card-available.component.css'
})
export class CardAvailableComponent {

	@Input()
	itemAvailable:String = "Disponível"

}
