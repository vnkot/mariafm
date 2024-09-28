export class AudioPlayer {
    private readonly elementId: string;
    private readonly classNameActive: string;
    private audioPlayerState: boolean = false;

    /**
     * Представляет аудио-плеер с возможностью активации.
     * @param {string} elementId - идентификатор HTML-элемента, представляющего аудио-плеер.
     * @param {string} classNameActive - класс-модификатор, добавляющийся при активации аудио-плеера.
     */
    constructor(elementId: string, classNameActive: string) {
        this.elementId = elementId;
        this.classNameActive = classNameActive;
    }

    private eventListener(element: HTMLElement) {
        element.addEventListener('click', () => {
            this.audioPlayerState = !this.audioPlayerState; // Используем состояние класса

            if (this.audioPlayerState) {
                element.classList.add(this.classNameActive);
            } else {
                element.classList.remove(this.classNameActive);
            }
        });
    }

    public init() {
        const element = document.getElementById(this.elementId);

        if (!element) {
            throw new Error(`Не удалось найти html-элемент по переданному идентификатору ${this.elementId}`);
        }

        this.eventListener(element);
    }
}
