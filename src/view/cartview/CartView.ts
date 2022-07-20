import { Product } from "../../model/Product";
import './cartview.css';

class CartView {
    cart: CartPosition[] = [];
    element: HTMLElement;
    counterElement: HTMLElement;
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

        let innerHTML: string = ''

        if (this.element == null) {
            this.element = document.querySelector('.cartview');
            this.counterElement = document.querySelector(".cart__counter");
        }

        for (let i: number = 0; i < this.cart.length; i++) {
            innerHTML += `<div class="cartview__item">
                <div>${this.cart[i].product.id} </div>
                <div>${this.cart[i].product.title} </div>
                <div>${this.cart[i].product.releaseDate} </div>
                <div>${this.cart[i].product.description} </div>
                <div>${this.cart[i].product.price} </div>

            
            </div>`
        }
        this.element.innerHTML = `<div class="cartview">${innerHTML}</div>`;
        this.counterElement.innerHTML = `${this.cart.length}`;
    }

    addProduct(product: Product, count: number) {

        let position: CartPosition = new CartPosition();
        position.count = count;
        position.product = product

        this.cart.push(position);

        this.update();
    }

    removeProduct(product: Product) {
        //
    }


}

class CartPosition {
    product: Product;
    count: number;
}

export {CartView};