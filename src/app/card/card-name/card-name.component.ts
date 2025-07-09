import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-name',
  imports: [],
  templateUrl: './card-name.component.html',
  styleUrl: './card-name.component.css'
})
export class CardNameComponent {

	@Input()
	itemName:String = "O Grito"

}
