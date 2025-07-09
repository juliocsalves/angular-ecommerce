import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  imports: [],
  templateUrl: './card-preco.component.html',
  styleUrls: ['./card-preco.component.css']
})
export class CardPrecoComponent {

  @Input()
  itemPreco: String = "carregando..."

}
