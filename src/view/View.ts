import './global.css';  

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
    //document: Document;
    appElement: HTMLElement;
    sliderElement: HTMLElement;

    constructor() {
        this.header = new Header();
        this.footer = new Footer();
        this.slider = new Slider();
        this.appElement = document.querySelector('body') as HTMLElement;

    }

    init() {
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
        if (this.sliderElement==null)
            this.sliderElement = document.querySelector('.slider-inner') as HTMLElement;            
        this.sliderElement.style.left = -page*100+'%';
    }
}

export {View}