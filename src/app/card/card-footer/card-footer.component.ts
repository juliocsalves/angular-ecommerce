import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-card-footer',
	imports: [CommonModule],
	templateUrl: './card-footer.component.html',
	styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent {
	show = false;

	ngOnInit(): void {
		setTimeout(() => {
			this.show = true;
		}, 100);
	}

}
