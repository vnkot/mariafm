import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import { OPTIONS, PLUGINS } from './models/const/index.ts';

interface IShowCarouselConfig {
	btnPrevId: string;
	btnNextId: string;
	carouselId: string;
	indicatorsId: string;
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

	/**
	 * @param {IShowCarouselConfig} config - Конфигурация карусели, содержащая необходимые параметры для инициализации.
	 * @param {string} config.carouselId - ID элемента карусели.
	 * @param {string} config.indicatorsId - ID элемента индикаторов карусели.
	 * @param {string} config.btnPrevId - ID элемента управления каруселью.
	 * @param {string} config.btnNextId - ID элемента управления каруселью.
	 * @param {string} config.indicatorActiveClassName - Имя класса, который будет добавлен к активному индикатору.
	 */
	constructor(config: IShowCarouselConfig) {
		this.config = config;

		this.getElements();
		this.createCarousel();
	}

	private getElements() {
		const showCarouselElement = document.getElementById(
			this.config.carouselId
		);
		const btnPrevElement = document.getElementById(this.config.btnPrevId);
		const btnNextElement = document.getElementById(this.config.btnNextId);
		const showIndicatorsElement = document.getElementById(
			this.config.indicatorsId
		);

		if (
			!btnPrevElement ||
			!btnNextElement ||
			!showCarouselElement ||
			!showIndicatorsElement
		) {
			throw new Error(
				'Не удалось получить необходимые элементы для карусели'
			);
		}

		this.carouselElement = showCarouselElement;
		this.indicatorsElement = showIndicatorsElement;
		this.btnPrevElement = btnPrevElement;
		this.btnNextElement = btnNextElement;
	}

	private createCarousel() {
		this.carousel = EmblaCarousel(this.carouselElement, OPTIONS, PLUGINS);
	}

	private generateIndicators(carouselType: EmblaCarouselType) {
		const countSlideInView = carouselType.slidesInView().length;
		const indicator = this.indicatorsElement.children[0];

		if (!indicator) {
			throw new Error(
				`Не обнаружен индикатор слайда в элементе ${this.indicatorsElement}`
			);
		}

		if (this.isScroll) return;

		this.indicatorsElement.innerHTML = '';

		for (
			let i = 0;
			i < Math.max(carouselType.slideNodes().length / countSlideInView);
			i += 1
		) {
			const cloneIndicator = indicator.cloneNode() as HTMLElement;

			if (i === 0)
				cloneIndicator.classList.add(
					this.config.indicatorActiveClassName
				);

			this.indicatorsElement.appendChild(cloneIndicator);
		}

		this.addEventListenerForIndicator();
	}

	private positioningCtrl(carouselType: EmblaCarouselType) {
		const { height: slideHeight, width: slideWidth } = carouselType
			.slideNodes()[0]
			.getBoundingClientRect();

		const countSlideInView = carouselType.slidesInView().length;

		if (this.isScroll) return;

		this.btnPrevElement.style.position = 'absolute';
		this.btnNextElement.style.position = 'absolute';

		this.btnPrevElement.style.top = `${slideHeight / 2}px`;
		this.btnNextElement.style.top = `${slideHeight / 2}px`;

		this.btnPrevElement.style.transform = 'translate(-50%, -50%)';
		this.btnNextElement.style.transform = 'translate(-50%, -50%)';

		const horShift = countSlideInView === 2 ? slideWidth : slideWidth / 2;

		this.btnPrevElement.style.left = `calc(50% - ${horShift}px + 16px)`;
		this.btnNextElement.style.left = `calc(50% + ${horShift}px - 16px)`;
	}

	private addEventListenerForCtrl() {
		this.btnPrevElement.addEventListener('click', () => {
			this.carousel.scrollPrev();
		});

		this.btnNextElement.addEventListener('click', () => {
			this.carousel.scrollNext();
		});
	}

	private addEventListenerForIndicator() {
		const indicators = [...this.indicatorsElement.children];

		indicators.forEach((indicator, i) => {
			indicator.addEventListener('click', () => {
				this.carousel.scrollTo(i);
			});
		});

		this.carousel.on('scroll', (event) => {
			indicators.forEach((indicator) => {
				indicator.classList.remove(
					this.config.indicatorActiveClassName
				);
			});

			indicators[event.selectedScrollSnap()] &&
				indicators[event.selectedScrollSnap()].classList.add(
					this.config.indicatorActiveClassName
				);
		});
	}

	private addEventListenerForCarousel() {
		this.carousel.on('slidesInView', (event) => {
			this.positioningCtrl(event);
			this.generateIndicators(event);
		});
		this.carousel.on('scroll', () => {
			this.isScroll = true;
		});
		this.carousel.on('settle', () => {
			this.isScroll = false;
		});
	}

	init() {
		this.addEventListenerForCtrl();
		this.addEventListenerForCarousel();
		this.addEventListenerForIndicator();
	}
}
