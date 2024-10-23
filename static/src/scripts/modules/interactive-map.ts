export class InteractiveMap {
	private readonly mapContainerId: string;
	private readonly urlToYMap: string;

	private mapContainerElement!: HTMLElement;

	/**
	 * @param {string} containerId - ID HTML-элемента, в котором будет отображаться карта.
	 * @param {string} urlToYMap - Ссылка на яндекс карту, созданную через конструктор Яндекс Карты
	 */
	constructor(containerId: string, urlToYMap: string) {
		this.mapContainerId = containerId;
		this.urlToYMap = urlToYMap;

		this.getElements();
	}

	private getElements() {
		const mapContainer = document.getElementById(this.mapContainerId);

		if (!mapContainer) {
			throw new Error(`Не удалось найти элемент ${this.mapContainerId}`);
		}

		this.mapContainerElement = mapContainer;
	}

	private createMap() {
		const iframe = document.createElement('iframe');

		iframe.src = this.urlToYMap;

		this.mapContainerElement.appendChild(iframe);
	}

	init() {
		this.createMap();
	}
}
