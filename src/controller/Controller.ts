import {View} from '../view/View';

class Controller {
    view: View;

    constructor() {
    }

    setView(view: View) {
        this.view = view;
    }

    navigate(url: string) {
        this.view.render();
        this.view.setView(0);
    }
}

export {Controller}