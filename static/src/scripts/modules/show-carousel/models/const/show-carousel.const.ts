import Autoplay from 'embla-carousel-autoplay';
// @ts-ignore
import { EmblaOptionsType } from 'embla-carousel/components/Options';

export const OPTIONS: EmblaOptionsType = {
	loop: true,
	startIndex: 0,
	slidesToScroll: 'auto',
	inViewThreshold: 1,
};
export const PLUGINS = [Autoplay({ playOnInit: true, delay: 4000 })];
