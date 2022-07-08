import { ShowcaseView } from "./showcaseview/ShowcaseView";
import {CatalogView} from './catalogview/CatalogView';


class Slider {
    showcaseView: ShowcaseView;
    catalogView: CatalogView;
    //productView: ProductView;

    constructor() {
        this.showcaseView = new ShowcaseView();
        this.catalogView = new CatalogView();
    }

    render() {
        let innerHTML: string = '';

        innerHTML += this.showcaseView.render();
        innerHTML += this.catalogView.render();

        return `
        <div class="slider">
            <div class="slider-preinner">
                <div class="slider-inner">
                    ${innerHTML}
                    <div class="productview">product</div>
                </div>
            </div>
        </div>
        
        `
    }
}

export {Slider}