export class AudioPlayer {
    private readonly playerId: string;
    private readonly classNameActive: string;
    
    private playerElement!: HTMLElement;
    private audioElement!: HTMLAudioElement;

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
        const audio = element?.getElementsByTagName('audio')[0];
        
        if (!audio) throw new Error(`Не удалось найти audio-элемент в ${element}`);
        if (!element) throw new Error(`Не удалось найти html-элемент по переданному идентификатору ${this.playerId}`);

        this.audioElement = audio;
        this.playerElement = element;
    }

    private eventListener() {
        this.playerElement.addEventListener('click', () => {
            this.audioPlayerState = !this.audioPlayerState;

            if (this.audioPlayerState) {
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
