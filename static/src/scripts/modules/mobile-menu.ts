interface IMobileMenuConfig {
	menuId: string;
	overlayId: string;
	btnOpenId: string;
	byCloseClass: string;
	maxScreenWidth: number;
	menuPrefixShowClass: string;
	overlayPrefixShowClass: string;
}

export class MobileMenu {
	private readonly menuId: string;
	private readonly overlayId: string;
	private readonly btnOpenId: string;
	private readonly byCloseClass: string;
	private readonly maxScreenWidth: number;
	private readonly menuPrefixShowClass: string;
	private readonly overlayPrefixShowClass: string;

	private menuElement!: HTMLElement;
	private overlayElement!: HTMLElement;
	private btnOpenElement!: HTMLElement;

	constructor({
		menuId,
		overlayId,
		btnOpenId,
		byCloseClass,
		maxScreenWidth,
		menuPrefixShowClass,
		overlayPrefixShowClass,
	}: IMobileMenuConfig) {
		this.menuId = menuId;
		this.overlayId = overlayId;
		this.btnOpenId = btnOpenId;
		this.byCloseClass = byCloseClass;
		this.maxScreenWidth = maxScreenWidth;
		this.menuPrefixShowClass = menuPrefixShowClass;
		this.overlayPrefixShowClass = overlayPrefixShowClass;

		this.getElements();
	}

	private getElements() {
		const menu = document.getElementById(this.menuId);
		const overlay = document.getElementById(this.overlayId);
		const btnOpen = document.getElementById(this.btnOpenId);

		if (!menu || !overlay || !btnOpen) {
			throw new Error(
				'Не удалось получить необходимые элементы для мобильного меню'
			);
		}

		this.menuElement = menu;
		this.overlayElement = overlay;
		this.btnOpenElement = btnOpen;
	}

	private lockBody() {
		document.body.style.overflowY = 'hidden';
	}

	private unlockBody() {
		document.body.style.overflowY = 'auto';
	}

	private checkScreenSize() {
		if (window.screen.width > this.maxScreenWidth) {
			this.onClose();
		}
	}

	private onClose(event?: MouseEvent) {
		event?.stopPropagation();

		this.menuElement.classList.remove(this.menuPrefixShowClass);
		this.overlayElement.classList.remove(this.overlayPrefixShowClass);

		this.unlockBody();
	}

	private addEventBtnOpen() {
		this.btnOpenElement.addEventListener('click', (event) => {
			event.preventDefault();
			event.stopPropagation();

			this.menuElement.classList.add(this.menuPrefixShowClass);
			this.overlayElement.classList.add(this.overlayPrefixShowClass);

			this.lockBody();
		});
	}

	private addEventOverlay() {
		this.overlayElement.addEventListener('click', (event) => {
			this.onClose(event);
		});
	}

	private addEventMenu() {
		this.menuElement.addEventListener('click', (event: MouseEvent) => {
			const target = event.target as HTMLDivElement;

			if (target.classList.contains(this.byCloseClass)) {
				this.onClose(event);
			}
		});
	}

	private addEventWindow() {
		window.addEventListener('resize', () => {
			this.checkScreenSize();
		});
		window.addEventListener('DOMContentLoaded', () => {
			this.checkScreenSize();
		});
	}

	init() {
		this.addEventMenu();
		this.addEventBtnOpen();
		this.addEventOverlay();
		this.addEventWindow();
	}
}
