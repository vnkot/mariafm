/**
 * Класс для управления плавающей кнопкой
 *
 * Добавляют скрывающий класс, как только достигнет элемента,
 * чей идентификатор передан в конструктор
 * */
export class FloatingButton {
	private readonly btnId: string;
	private readonly boundaryId: string;
	private readonly hiddenClass: string;

	private readonly minWidth: number;

	private btnEl!: HTMLElement;
	private boundaryEl!: HTMLElement;

	constructor(
		btnId: string,
		boundaryId: string,
		hiddenClass: string,
		minWidth: number
	) {
		this.btnId = btnId;
		this.boundaryId = boundaryId;
		this.hiddenClass = hiddenClass;
		this.minWidth = minWidth;

		this.getElements();
	}

	private getElements() {
		const btnElement = document.getElementById(this.btnId);
		const boundaryElement = document.getElementById(this.boundaryId);

		if (!btnElement) {
			throw new Error(`Элемент ${this.btnId} не найден`);
		}
		if (!boundaryElement) {
			throw new Error(`Элемент ${this.boundaryId} не найден`);
		}

		this.btnEl = btnElement;
		this.boundaryEl = boundaryElement;
	}

	private toggleShow() {
		if (window.innerWidth > this.minWidth) return;

		const boundaryElTop = this.boundaryEl.offsetTop;
		const btnElTop = this.btnEl.offsetTop + window.scrollY;

		if (boundaryElTop < btnElTop) {
			return this.btnEl.classList.add(this.hiddenClass);
		}

		this.btnEl.classList.remove(this.hiddenClass);
	}

	private addEvent() {
		window.addEventListener('scroll', () => {
			this.toggleShow();
		});
	}

	init() {
		this.toggleShow();
		this.addEvent();
	}
}
