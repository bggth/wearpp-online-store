import {Controller} from '../controller/Controller';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Slider} from "./Slider";

class View {
    controller: Controller;
    header: Header;
    footer: Footer;
    //menu: Menu;
    slider: Slider;
    document: Document;
    appElement: HTMLElement;

    constructor() {
        this.header = new Header();
        this.footer = new Footer();
        this.slider = new Slider();
        this.appElement = document.getElementById('body') as HTMLElement
    }

    setController(controller: Controller) {
        this.controller = controller;
    }

    render() {
        let innerHTML: string = '';
        innerHTML += this.header.render();
        innerHTML += this.slider.render();
        innerHTML += this.footer.render();

        this.appElement.innerHTML = innerHTML;
        return;
    }

    setView(page: number) {

    }
}

export {View}