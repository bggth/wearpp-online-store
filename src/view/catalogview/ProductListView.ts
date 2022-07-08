import { Product } from "../../model/Product";
import { ProductListViewItem } from "./ProductListViewItem";

class ProductListView {
    element: HTMLElement;
    products: ProductListViewItem[] = [];
    constructor() {
        this.element = document.querySelector('.productlistview');
    }

    render() {
        return `
        <div class="productlistview">
        product1
        product2
        product3
        product4
        product5
        product6
        product7
        product8
        </div>
        `
    }

    update(json: string) {
        if (this.element==null)
            this.element = document.querySelector('.productlistview');

        this.products = [];
        
        let innerHTML: string = '';

        let data: Product[] = JSON.parse(json);
        
        for (let i: number = 0; i < data.length; i++) {
            let product_lvi: ProductListViewItem = new ProductListViewItem(data[i]);
            this.products.push(product_lvi);
        }
        for (let i: number = 0; i < data.length; i++) {
            innerHTML += this.products[i].render();
        }
        this.element.innerHTML = innerHTML;
    }
}

export {ProductListView}