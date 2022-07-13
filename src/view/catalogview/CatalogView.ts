import { Footer } from '../Footer';
import './catalogview.css'

import {FilterView} from './FilterView';
import {ProductListView} from './ProductListView';

class CatalogView {
    filterView: FilterView;
    productListView: ProductListView;
    element: HTMLElement;
    footer: Footer;
    constructor() {
        this.filterView = new FilterView();
        this.productListView = new ProductListView();
        this.footer = new Footer();
    }


    render() {
        let innerHTML: string = '';
        innerHTML += this.filterView.render();
        innerHTML += this.productListView.render();
        return `
            <div class="catalogview">
            <div class="catalogview__columns">
                ${innerHTML}
            </div>
            ${this.footer.render()}
            </div>
        `
    }

    colapse(up: boolean) {
        if (this.element == null)
            this.element = document.querySelector('.catalogview') as HTMLElement;
        this.element.style.height = up?'100px':'100%';
    }

}

export {CatalogView}