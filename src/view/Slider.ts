import { ShowcaseView } from "./showcaseview/ShowcaseView";
import {CatalogView} from './catalogview/CatalogView';
import {CartView} from './cartview/CartView';

class Slider {
    showcaseView: ShowcaseView;
    catalogView: CatalogView;
    cartView: CartView;
    //productView: ProductView;

    constructor() {
        this.showcaseView = new ShowcaseView();
        this.catalogView = new CatalogView();
        this.cartView = new CartView();
    }

    render() {
        let innerHTML: string = '';

        innerHTML += this.showcaseView.render();
        innerHTML += this.catalogView.render();
        innerHTML += this.cartView.render();

        return `
        <div class="slider">
            <div class="slider-preinner">
                <div class="slider-inner">
                    ${innerHTML}
                </div>
            </div>
        </div>
        
        `
    }
}

export {Slider}