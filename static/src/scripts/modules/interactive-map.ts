// @ts-ignore
import DG from '2gis-maps';

export class InteractiveMap {
    private readonly cords: [number, number];
    private readonly mapContainerId: string;

    private map: any;

    /**
     * @param {string} containerId - ID HTML-элемента, в котором будет отображаться карта.
     * @param {[number, number]} cords - Координаты объекта карты в формате [широта, долгота].
     */
    constructor(containerId: string, cords: [number, number]) {
        this.cords = cords;
        this.mapContainerId = containerId;

    }

    private createMap() {
        this.map = DG.map(this.mapContainerId, {
            center: this.cords,
            zoom: 16,
            zoomControl: false,
            fullscreenControl: false
        })
        DG.marker(this.cords).addTo(this.map);
    }

    init() {
        this.createMap();
    }
}