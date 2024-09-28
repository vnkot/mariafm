import 'vite/modulepreload-polyfill';
import { AudioPlayer } from './modules/audio-player.ts';

new AudioPlayer('radio', 'radio--active').init()

