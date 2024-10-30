import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import { OPTIONS } from './model/const/index.ts';

interface ITeamCarouselConfig {
	btnNextId: string;
	btnPrevId: string;
	carouselId: string;
}

export class TeamCarousel {
	private readonly config: ITeamCarouselConfig;

	private carouselElement!: HTMLElement;
	private btnPrevElement!: HTMLButtonElement;
	private btnNextElement!: HTMLButtonElement;

	private carousel!: EmblaCarouselType;

	constructor(config: ITeamCarouselConfig) {
		this.config = config;

		this.getElements();
		this.createCarousel();
	}

	private getElements() {
		const btnPrevElement = document.getElementById(this.config.btnPrevId);
		const btnNextElement = document.getElementById(this.config.btnNextId);
		const carouselElement = document.getElementById(this.config.carouselId);

		if (!btnPrevElement || !btnNextElement || !carouselElement) {
			throw new Error(
				'Не удалось получить необходимые элементы для карусели'
			);
		}

		this.carouselElement = carouselElement;
		this.btnPrevElement = btnPrevElement as HTMLButtonElement;
		this.btnNextElement = btnNextElement as HTMLButtonElement;
	}

	private createCarousel() {
		this.carousel = EmblaCarousel(this.carouselElement, OPTIONS);
	}

	private addEventListenerForCtrl() {
		this.btnPrevElement.addEventListener('click', () => {
			if (!this.carousel.canScrollPrev()) {
				return this.carousel.scrollTo(
					this.carousel.slideNodes().length - 1
				);
			}

			this.carousel.scrollPrev();
		});
		this.btnNextElement.addEventListener('click', () => {
			if (!this.carousel.canScrollNext()) {
				return this.carousel.scrollTo(0);
			}
			this.carousel.scrollNext();
		});
	}

	init() {
		this.addEventListenerForCtrl();
	}
}
