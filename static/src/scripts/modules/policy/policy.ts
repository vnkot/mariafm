export class Policy {
	private readonly elementId: string;
	private readonly storageKey = 'isAcceptPolicy';

	constructor(elementId: string) {
		this.elementId = elementId;
	}

	private getElement(): HTMLElement | null {
		return document.getElementById(this.elementId);
	}

	private hide() {
		const element = this.getElement();

		if (!element) return;

		element.style.display = 'none';
	}

	private show() {
		const element = this.getElement();

		if (!element) return;

		element.style.display = 'block';
	}

	private onLoadVisibilityHandler() {
		const isAcceptPolicy = localStorage.getItem(this.storageKey);

		if (isAcceptPolicy === 'true') {
			return this.hide();
		}

		this.show();
	}

	private btnAcceptHandler(): void {
		const element = this.getElement();
		if (!element) return;

		const btnAccept =
			element.querySelector<HTMLButtonElement>('.policy__accept');
		if (!btnAccept) return;

		btnAccept.addEventListener('click', () => {
			localStorage.setItem(this.storageKey, 'true');
			this.hide();
		});
	}

	public init(): void {
		this.onLoadVisibilityHandler();
		this.btnAcceptHandler();
	}
}
