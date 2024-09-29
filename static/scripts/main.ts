import 'vite/modulepreload-polyfill';
import {AudioPlayer} from './modules/audio-player.ts';
import {ShowCarousel} from './modules/show-carousel/index.ts';
import {TeamCarousel} from './modules/team-carousel/index.ts';

new AudioPlayer('radio', 'radio--active').init();
// new ShowCarousel({
//     carouselId: 'show-carousel',
//     indicatorsId: 'show-carousel-indicators',
//     carouselCtrlId: 'show-carousel-ctrl',
//     indicatorActiveClassName: 'show-carousel__indicator--active'
// }).init();
// new TeamCarousel({
//     btnNextId: 'team-btn-next',
//     btnPrevId: 'team-btn-prev',
//     carouselId: 'team-carousel'
// }).init()