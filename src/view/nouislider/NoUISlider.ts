import './nouislider.css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { Controller } from '../../controller/Controller';

class NoUISlider {
    min: number = -1;
    max: number = -1;
    from: number = -1;
    to: number = -1;
    element: any;
    fromElement: HTMLElement;
    toElement: HTMLElement;
    controller: Controller;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    init() {
        if (this.element == null) {
            this.element = document.querySelector('.nouislider');
            this.fromElement = document.querySelector('.nouislider__from');
            this.toElement = document.querySelector('.nouislider__to');
        }
        if (this.element) {
            console.log(this.element);
            noUiSlider.create(this.element, {
                start: [this.min, this.max],
                range: {
                    'min': [this.min],
                    'max': [this.max]
                },
                step: 1000,
            });

            this.element.noUiSlider.on('update', (values: any) => {
                this.fromElement.innerHTML = String(Number(values[0]));
                this.toElement.innerHTML = String(Number(values[1]));
                console.log(values);
            });
        }
    }

    setController(controller: Controller) {
        
    }

    getValues(): Number[] {
        return [0, 0];
    }

    render(): string {

        return `<div class="nouislider__view">
                    <div class="nouislider__values"> 
                        <div class="nouislider__from">${this.min}</div>
                        <div class="nouislider__to">${this.max}</div>
                    </div>
                    <div class="nouislider" id="nouislider"></div>
                </div>`
    }
}

export {NoUISlider};