export class AudioPlayer {
	private readonly playerId: string;
	private readonly classNameActive: string;

	private playerElement!: HTMLElement;
	private audioElement!: HTMLAudioElement;

	private audioSrc: string = '';
	private audioPlayerState: boolean = false;

	/**
	 * Представляет аудио-плеер с возможностью активации.
	 * @param {string} playerId - идентификатор HTML-элемента, представляющего аудио-плеер.
	 * @param {string} classNameActive - класс-модификатор, добавляющийся при активации аудио-плеера.
	 */
	constructor(playerId: string, classNameActive: string) {
		this.playerId = playerId;
		this.classNameActive = classNameActive;

		this.getElements();
	}

	private getElements() {
		const element = document.getElementById(this.playerId);
		const audioSrc = element?.getAttribute('data-src');

		if (!audioSrc) {
			throw new Error(`Не удалось найти data-src в ${element}`);
		}
		if (!element) {
			throw new Error(
				`Не удалось найти html-элемент по переданному идентификатору ${this.playerId}`
			);
		}

		const audio = document.createElement('audio');

		element.appendChild(audio);

		this.audioSrc = audioSrc;
		this.audioElement = audio;
		this.playerElement = element;
	}

	private eventListener() {
		this.playerElement.addEventListener('click', () => {
			this.audioPlayerState = !this.audioPlayerState;

			if (this.audioPlayerState) {
				this.audioElement.src = this.audioSrc;
				this.audioElement.play();
				this.playerElement.classList.add(this.classNameActive);
			} else {
				this.audioElement.pause();
				this.playerElement.classList.remove(this.classNameActive);
			}
		});
	}

	init() {
		this.eventListener();
	}
}
