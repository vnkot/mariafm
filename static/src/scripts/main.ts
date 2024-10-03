import 'vite/modulepreload-polyfill';
import {AudioPlayer} from './modules/audio-player.ts';
import {ShowCarousel} from './modules/show-carousel/show-carousel.ts';
import {TeamCarousel} from './modules/team-carousel/team-carousel.ts';
import {InteractiveMap} from './modules/interactive-map.ts';

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

// TODO: Все ниже - временная история
const school = document.getElementById('school')!;
const schoolContent = school.querySelector('.school__description')!;
const schoolImage = school.querySelector('.school__image')! as HTMLElement;

const onChangeImage = () => {
    const totalWidth = school.getBoundingClientRect().width;
    const contentCoord = schoolContent.getBoundingClientRect();

    const newWidth = Math.min(totalWidth - contentCoord.right, 1040);
    const newHeight = newWidth * (751.73 / 1276.32);

    schoolImage.style.width = `${newWidth}px`;
    schoolImage.style.height = `${newHeight}px`;
}

window.addEventListener('resize', onChangeImage);
window.addEventListener('load', onChangeImage);

// радота с хедером
const headerConstrol = () => {
    const mainHeader = document.querySelector('.header-nav')!;
    const header = document.getElementById('header')!;
    const headerChildren = [...header.children];

    const maxWidth = header.getBoundingClientRect().width;
    const occupiedWidth = headerChildren.reduce((acc, element) => {
        return acc + element.getBoundingClientRect().width;
    }, 0)

    if (window.screen.width < 1296) {
        if (maxWidth - occupiedWidth < 100) {
            mainHeader.classList.add('header-nav--mobile')
        } else {
            mainHeader.classList.remove('header-nav--mobile')
        }
    } else {
        mainHeader.classList.remove('header-nav--mobile')
    }
}

window.addEventListener('load', headerConstrol)
window.addEventListener('resize', headerConstrol)

// плавное появление сайта
const wrapper = document.querySelector('.wrapper')!;

window.addEventListener('load', () => {
    wrapper.classList.add('wrapper--visible')
})