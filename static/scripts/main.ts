import 'vite/modulepreload-polyfill';
import {AudioPlayer} from './modules/audio-player.ts';
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

new AudioPlayer('radio', 'radio--active').init()

const showCarouselElement = document.getElementById('show-carousel');
const showCtrlElement = document.getElementById('show-carousel-ctrl');
const showIndicatorsElement = document.getElementById('show-carousel-indicators');

if (showCarouselElement && showCtrlElement && showIndicatorsElement) {
    const options = {loop: true, startIndex: 0}
    const plugins = [Autoplay({playOnInit: true, delay: 4000})]

    const ctrlElements = [...showCtrlElement.children];
    const ctrlBtnPrev = ctrlElements[0];
    const ctrlBtnNext = ctrlElements[1];

    const indicatorElements = [...showIndicatorsElement.children];
    const indicator = indicatorElements[0];

    const showCarousel = EmblaCarousel(showCarouselElement as HTMLElement, options, plugins)

    ctrlBtnPrev.addEventListener('click', () => {
        showCarousel.scrollPrev();
    })

    ctrlBtnNext.addEventListener('click', () => {
        showCarousel.scrollNext();
    })

    showIndicatorsElement.innerHTML = '';
    showCarousel.slideNodes().forEach((_, i) => {
        const cloneIndicator = indicator.cloneNode() as HTMLElement;

        if (i === 0) {
            cloneIndicator.classList.add('show-carousel__indicator--active')
        }

        showIndicatorsElement.appendChild(cloneIndicator)
    })

    for (let  i = 0; i < showIndicatorsElement.children.length; i += 1) {
        showIndicatorsElement.children[i].addEventListener('click', () => {
            showCarousel.scrollTo(i);
        })
    }

    showCarousel.on('scroll', event => {
        [...showIndicatorsElement.children].forEach(children => {
            children.classList.remove('show-carousel__indicator--active');
        })

        showIndicatorsElement.children[event.selectedScrollSnap()].classList.add('show-carousel__indicator--active')
    })
}