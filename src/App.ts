import { Controller } from "./controller/Controller";
import { View } from "./view/View";

class App {
    controller: Controller;
    view: View;
    start() {
        this.view = new View();
        this.controller = new Controller();
        this.view.setController(this.controller);
        this.controller.setView(this.view);

        this.controller.navigate('');
    }
}