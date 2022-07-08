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
            <span class="header__menu-item underline noselect">Menu 1</span>
            <span class="header__menu-item underline noselect">Menu 2</span>
            <span class="header__menu-item underline noselect">Menu 3</span>
            </div>

            </header>
            ${innerMenuHTML}        `
    }
}

export {Header};