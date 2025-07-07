import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-card-title',
	standalone: true,
	imports: [NgIf],
	templateUrl: './card-title.component.html',
	styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {
	show = false;
	cartCount = 0;
	categoriasAtivas = false;
	categoriasVisiveis = false;

	ngOnInit(): void {
		setTimeout(() => {
			this.show = true;
			this.cartCount = 3;
		}, 100);
	}

	toggleCategorias() {
		if (this.categoriasAtivas) {
			this.categoriasAtivas = false;
			setTimeout(() => this.categoriasVisiveis = false, 400); // igual ao tempo da transição
		} else {
			this.categoriasVisiveis = true;
			setTimeout(() => this.categoriasAtivas = true, 10); // ligeiro delay pra iniciar transição
		}
	}
}

