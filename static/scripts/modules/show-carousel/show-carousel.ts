import EmblaCarousel, {EmblaCarouselType} from 'embla-carousel';
import {OPTIONS, PLUGINS} from './models/const/index.ts';

interface IShowCarouselConfig {
    carouselId: string;
    indicatorsId: string;
    carouselCtrlId: string;
    indicatorActiveClassName: string;
}

export class ShowCarousel {
    private readonly config: IShowCarouselConfig;

    private btnPrevElement!: HTMLElement;
    private btnNextElement!: HTMLElement;
    private carouselElement!: HTMLElement;
    private indicatorsElement!: HTMLElement;

    private carousel!: EmblaCarouselType;

    /**
     * @param {IShowCarouselConfig} config - Конфигурация карусели, содержащая необходимые параметры для инициализации.
     * @param {string} config.carouselId - ID элемента карусели.
     * @param {string} config.indicatorsId - ID элемента индикаторов карусели.
     * @param {string} config.carouselCtrlId - ID элемента управления каруселью.
     * @param {string} config.indicatorActiveClassName - Имя класса, который будет добавлен к активному индикатору.
     */
    constructor(config: IShowCarouselConfig) {
        this.config = config;

        this.getElements();
        this.createCarousel();
        this.generateIndicators();
    }

    private getElements() {
        const showCarouselElement = document.getElementById(this.config.carouselId);
        const showCtrlElement = document.getElementById(this.config.carouselCtrlId);
        const showIndicatorsElement = document.getElementById(this.config.indicatorsId);

        if (
            !showCtrlElement ||
            !showCarouselElement ||
            !showIndicatorsElement ||
            showCtrlElement.children.length !== 2
        ) {
            throw new Error('Не удалось получить необходимые элементы для карусели')
        }

        this.carouselElement = showCarouselElement;
        this.indicatorsElement = showIndicatorsElement;
        this.btnPrevElement = showCtrlElement.children[0] as HTMLElement;
        this.btnNextElement = showCtrlElement.children[1] as HTMLElement;
    }

    private createCarousel() {
        this.carousel = EmblaCarousel(this.carouselElement, OPTIONS, PLUGINS)
    }

    private generateIndicators() {
        const indicator = this.indicatorsElement.children[0];

        if (!indicator) {
            throw new Error(`Не обнаружен индикатор слайда в элементе ${this.indicatorsElement}`);
        }

        this.indicatorsElement.innerHTML = '';

        this.carousel.slideNodes().forEach((_, i) => {
            const cloneIndicator = indicator.cloneNode() as HTMLElement;

            if (i === 0) cloneIndicator.classList.add(this.config.indicatorActiveClassName);

            this.indicatorsElement.appendChild(cloneIndicator);
        })
    }

    private addEventListenerForCtrl() {
        this.btnPrevElement.addEventListener('click', () => {
            this.carousel.scrollPrev();
        })

        this.btnNextElement.addEventListener('click', () => {
            this.carousel.scrollNext();
        })
    }

    private addEventListenerForIndicator() {
        const indicators = [...this.indicatorsElement.children]

        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                this.carousel.scrollTo(i);
            })
        })

        this.carousel.on('scroll', event => {
            indicators.forEach((indicator) => {
                indicator.classList.remove(this.config.indicatorActiveClassName)
            })

            indicators[event.selectedScrollSnap()].classList.add(this.config.indicatorActiveClassName)
        })
    }

    init() {
        this.addEventListenerForCtrl();
        this.addEventListenerForIndicator();
    }
}