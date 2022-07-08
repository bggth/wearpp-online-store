import {Menu} from './Menu';

class Header {
    menu: Menu;

    constructor() {
        this.menu = new Menu();
    }

    render() {
        let innerHTML: string = '';

        let innerMenuHTML = this.menu.render();

        return `
            <header class="header">
            <img class="header__logo" src="/assets/wearpp-logo.svg" alt="header__logo"></img>
            <div class="header__menu">
            <span class="header__menu-item underline noselect tab-0">Home</span>
            <span class="header__menu-item underline noselect tab-1">Catalog</span>
            <span class="header__menu-item underline noselect tab-2">Cart</span>
            </div>

            </header>
            ${innerMenuHTML}        `
    }
}

export {Header};