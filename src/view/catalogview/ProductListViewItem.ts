import {Product} from '../../model/Product';

class ProductListViewItem {

    product: Product;
    constructor(product: Product) {
        this.product = product;
    }

    render() {
        let innerHTML: string = this.product.title;

        return `
        <div class="product__lvi item-${this.product.id}">
            <img class="product__lvi-img no-click" src="./assets/products/${this.product.imageUrl}.jpg"></img>
            <div class="product__lvi-title no-click">${this.product.title}<sup>${this.product.releaseDate}</sup></div>
            <div class="product__lvi-price no-click">${this.product.price} rub</div>
            <span class="product__lvi-add add-${this.product.id} button underline noselect">add</span>
        </div>
        `
    }
}

export {ProductListViewItem}