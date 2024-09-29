import 'vite/modulepreload-polyfill';
import {AudioPlayer} from './modules/audio-player.ts';
import {ShowCarousel} from './modules/show-carousel/index.ts';
import {TeamCarousel} from './modules/team-carousel/index.ts';
import {InteractiveMap} from './modules/interactive-map.ts';

declare interface DG {

}

new AudioPlayer('radio', 'radio--active').init();
new ShowCarousel({
    carouselId: 'show-carousel',
    indicatorsId: 'show-carousel-indicators',
    carouselCtrlId: 'show-carousel-ctrl',
    indicatorActiveClassName: 'show-carousel__indicator--active'
}).init();
new TeamCarousel({
    btnNextId: 'team-btn-next',
    btnPrevId: 'team-btn-prev',
    carouselId: 'team-carousel'
}).init()
new InteractiveMap('footer-map', [58.583945, 49.659408]).init();