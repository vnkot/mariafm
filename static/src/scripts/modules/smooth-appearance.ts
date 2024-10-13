export class SmoothAppearance {
	private body: HTMLElement;
	private readonly elementClass: string;

	constructor(elementClass: string) {
		this.body = document.body;
		this.elementClass = elementClass;
	}

	init(): void {
		window.addEventListener('DOMContentLoaded', () => {
			this.body.classList.add(this.elementClass);
		});
	}
}
