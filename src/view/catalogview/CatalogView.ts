import './catalogview.css'

import {FilterView} from './FilterView';
import {ProductListView} from './ProductListView';

class CatalogView {
    filterView: FilterView;
    productListView: ProductListView;

    constructor() {
        this.filterView = new FilterView();
        this.productListView = new ProductListView();

    }


    render() {
        let innerHTML: string = '';
        innerHTML += this.filterView.render();
        innerHTML += this.productListView.render();
        return `
        <div class="catalogview">
            ${innerHTML}
        </div>
        `
    }


}

export {CatalogView}