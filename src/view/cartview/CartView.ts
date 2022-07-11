import { Product } from "../../model/Product";
import './cartview.css';

class CartView {
    cart: CartPosition[] = [];
    element: HTMLElement;
    constructor() {

    }

    render()  {
        return `
        <div class="cartview">
        <div class="cartview__item">item 1</div>
        <div class="cartview__item">item 1</div>
        <div class="cartview__item">item 1</div>
        <div class="cartview__item">item 1</div>
        <div class="cartview__item">item 1</div>
        </div>
        `
    }

    update() {
        if (this.element == null) {
            this.element = document.querySelector('.cartview');
        }
    }

    addProduct(product: Product, count: number) {
        this.update()
    }

    removeProduct(product: Product) {
        //
    }


}

interface CartPosition {
    product: Product;
    count: number;
}

export {CartView};