import { Controller } from '../../controller/Controller';
import {NoUISlider} from '../nouislider/NoUISlider';

class FilterView {
    
    buttonPrice: HTMLElement;
    buttonRelease: HTMLElement;
    searchFilter: string;
    searchInput: HTMLElement;
    sortInput: HTMLElement;
    sortMode: number;
    noUISlider: NoUISlider;
    controller: Controller;
    

    constructor() {
        this.noUISlider = new NoUISlider(0, 5000);
    }

    render() {
        let innerHTML: string = '';
        innerHTML = this.noUISlider.render();
        return `
        <div class="filterview" >
        <input type="editbox" class="search__input underline" placeholder="search" ></input>
        ${innerHTML}
        <span class="button button-search underline noselect">clear</span>
        <select class="sort__input">
            <option>price: min -> max</option>
            <option>price: max -> min</option>
            <option>release: old -> new</option>
            <option>release: new -> old</option>
        </select>
        </div>
        `
    }

    init() {
        if (this.searchInput == null) {
            this.searchInput = document.querySelector('.search__input');
        }
        this.searchInput?.addEventListener('input', (e: any) => {
            this.searchFilter = e.target.value;
            this.controller.on('update', '')
        })

        if (this.sortInput == null) {
            this.sortInput = document.querySelector('.sort__input');
        }
        this.sortInput?.addEventListener('input', (e: any) => {
            this.sortMode = e.target.selectedIndex;
            this.controller.on('update', '')
        })     
    }

    switch(mode: Number) {
        console.log('mode', mode);
    }

    setController(controller: Controller) {
        this.controller = controller;
    }
}

export {FilterView};