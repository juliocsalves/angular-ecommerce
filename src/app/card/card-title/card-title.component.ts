import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [
		NgIf
	],
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {
  show = false;
	cartCount = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
			this.cartCount = 3;
    }, 100);
  }
}
