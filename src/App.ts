import { Controller } from "./controller/Controller";
import { View } from "./view/View";
import {Utils} from './utils/Utils';
import { Model } from "./model/Model";

class App {
    model: Model;
    controller: Controller;
    view: View;
    
    start() {
        this.model = new Model();
        this.model.randomize(45);

        this.view = new View();
        this.controller = new Controller();

        this.view.setController(this.controller);
        this.controller.setModel(this.model);
        this.controller.setView(this.view);

        this.view.init();
        this.controller.init();
        this.controller.navigate('');


    }
}

export {App};