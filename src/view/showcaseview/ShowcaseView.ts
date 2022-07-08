import './showcaseview.css';  

import {HeroShowcaseView} from './HeroShowcaseView';

class ShowcaseView {
    heroShowcaseView: HeroShowcaseView;
    constructor() {
        this.heroShowcaseView = new HeroShowcaseView();
    }

    render() {
        let innerHTML: string = '';
        innerHTML += this.heroShowcaseView.render();
        return `
        <div class="showcaseview">
        ${innerHTML}
        </div>
        `
    }
}

export {ShowcaseView};