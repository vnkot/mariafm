import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import { OPTIONS, PLUGINS } from './models/const/index.ts';

interface IShowCarouselConfig {
	btnPrevId: string;
	btnNextId: string;
	carouselId: string;
	indicatorsId: string;
	indicatorTag: string;
	indicatorClassName: string;
	indicatorActiveClassName: string;
}

export class ShowCarousel {
	private readonly config: IShowCarouselConfig;
	private btnPrevElement!: HTMLElement;
	private btnNextElement!: HTMLElement;
	private carouselElement!: HTMLElement;
	private indicatorsElement!: HTMLElement;

	private carousel!: EmblaCarouselType;
	private isScroll: boolean = false;

	constructor(config: IShowCarouselConfig) {
		this.config = config;
		this.initializeElements();
		this.createCarousel();
	}

	private initializeElements() {
		const { carouselId, btnPrevId, btnNextId, indicatorsId } = this.config;

		this.carouselElement = this.getElement(carouselId);
		this.btnPrevElement = this.getElement(btnPrevId);
		this.btnNextElement = this.getElement(btnNextId);
		this.indicatorsElement = this.getElement(indicatorsId);
	}

	private getElement(id: string): HTMLElement {
		const element = document.getElementById(id);
		if (!element) {
			throw new Error(`Не удалось получить элемент с ID: ${id}`);
		}
		return element;
	}

	private createCarousel() {
		this.carousel = EmblaCarousel(this.carouselElement, OPTIONS, PLUGINS);
	}

	private generateIndicators(carousel: EmblaCarouselType) {
		if (this.isScroll) return;

		const countAllSlides = carousel.slideNodes().length;
		const countSlidesInView = carousel.slidesInView().length;

		const indicatorCount = Math.max(countAllSlides / countSlidesInView);

		[...this.indicatorsElement.children].forEach((indicator) => {
			indicator.remove();
		});

		for (let i = 0; i < indicatorCount; i += 1) {
			const indicator = document.createElement(this.config.indicatorTag);
			indicator.classList.add(this.config.indicatorClassName);

			if (i === 0) {
				indicator.classList.add(this.config.indicatorActiveClassName);
			}

			this.indicatorsElement.appendChild(indicator);
		}

		this.addIndicatorEventListeners();
	}

	private setControlPositions(carousel: EmblaCarouselType) {
		const { height: slideHeight, width: slideWidth } = carousel
			.slideNodes()[0]
			.getBoundingClientRect();
		const countSlideInView = carousel.slidesInView().length;

		if (this.isScroll) return;

		this.btnPrevElement.style.cssText = `
		 	position: absolute;
		 	top: ${slideHeight / 2}px;
		 	left: calc(50% - ${countSlideInView === 2 ? slideWidth : slideWidth / 2}px + 16px);
		 	transform: translate(-50%, -50%);
		`;
		this.btnNextElement.style.cssText = `
		 	position: absolute;
		 	top: ${slideHeight / 2}px;
		 	left: calc(50% + ${countSlideInView === 2 ? slideWidth : slideWidth / 2}px - 16px);
		 	transform: translate(-50%, -50%);
		`;
	}

	private resetTimerAutoplay() {
		this.carousel.plugins()?.autoplay.reset();
	}

	private addControlEventListeners() {
		this.btnPrevElement.addEventListener('click', () => {
			this.carousel.scrollPrev();
			this.resetTimerAutoplay();
		});
		this.btnNextElement.addEventListener('click', () => {
			this.carousel.scrollNext();
			this.resetTimerAutoplay();
		});
	}

	private addIndicatorEventListeners() {
		const indicators = Array.from(this.indicatorsElement.children);

		indicators.forEach((indicator, index) => {
			indicator.addEventListener('click', () => {
				this.carousel.scrollTo(index);
				this.resetTimerAutoplay();
			});
		});

		this.carousel.on('scroll', (event) => {
			const indicators = Array.from(this.indicatorsElement.children);

			indicators.forEach((indicator) => {
				indicator.classList.remove(
					this.config.indicatorActiveClassName
				);
			});

			const activeIndicator = indicators[event.selectedScrollSnap()];

			if (activeIndicator) {
				activeIndicator.classList.add(
					this.config.indicatorActiveClassName
				);
			}
		});
	}

	private addCarouselEventListeners() {
		this.carousel.on('slidesInView', (event) => {
			this.setControlPositions(event);
		});
		this.carousel.on('init', (event) => {
			this.generateIndicators(event);
		});
		this.carousel.on('scroll', () => (this.isScroll = true));
		this.carousel.on('settle', () => (this.isScroll = false));
	}

	init() {
		this.addControlEventListeners();
		this.addCarouselEventListeners();
		this.addIndicatorEventListeners();
	}
}
