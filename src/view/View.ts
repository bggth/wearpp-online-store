import './global.css';  

import {Controller} from '../controller/Controller';
import {Header} from "./Header";
import {Slider} from "./Slider";

class View {
    controller: Controller;
    header: Header;
    //menu: Menu;
    slider: Slider;
    //document: Document;
    appElement: HTMLElement;
    sliderElement: HTMLElement;

    constructor() {
        this.header = new Header();
        this.slider = new Slider();
        this.appElement = document.querySelector('body') as HTMLElement;

    }

    init() {
        this.slider.catalogView.filterView.noUISlider.init();
        this.slider.catalogView.filterView.noUISlider.setController(this.controller);
    }

    setController(controller: Controller) {
        this.controller = controller;
    }

    render() {
        let innerHTML: string = '';
        innerHTML += this.header.render();
        innerHTML += this.slider.render();

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