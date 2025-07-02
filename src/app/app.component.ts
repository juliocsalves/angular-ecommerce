import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CardTitleComponent } from "./card/card-title/card-title.component";
import { CardFooterComponent } from "./card/card-footer/card-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CardTitleComponent, CardFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ecommerce';
}
