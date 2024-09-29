import 'vite/modulepreload-polyfill';
import {AudioPlayer} from './modules/audio-player.ts';
import {ShowCarousel} from './modules/show-carousel/index.ts';
import EmblaCarousel, {EmblaCarouselType} from 'embla-carousel';
import { OPTIONS, PLUGINS } from './modules/show-carousel/models/const/show-carousel.const.ts';

new AudioPlayer('radio', 'radio--active').init();
new ShowCarousel({
    carouselId: 'show-carousel',
    indicatorsId: 'show-carousel-indicators',
    carouselCtrlId: 'show-carousel-ctrl',
    indicatorActiveClassName: 'show-carousel__indicator--active'
}).init();


const teamCarouselElement = document.getElementById('team-carousel');
const teamBtnPrev = document.getElementById('team-btn-prev');
const teamBtnNext = document.getElementById('team-btn-next');

const teamCarousel = EmblaCarousel(teamCarouselElement, OPTIONS);

teamBtnPrev?.addEventListener('click', () => {
    teamCarousel.scrollPrev();
})


teamBtnNext?.addEventListener('click', () => {
    teamCarousel.scrollNext();
})