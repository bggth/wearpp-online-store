import { Model } from '../model/Model';
import { Product } from '../model/Product';
import {View} from '../view/View';

class Controller {
    view: View;
    model: Model;

    constructor() {
    }

    init() {
        const body = document.querySelector('body');  
        if (body.addEventListener) {
            body.addEventListener('click', (e:any) => {
                for (let i:number =0; i < e.target.classList.length; i++) {
                    let id: string = e.target.classList[i];
                    let ids: string[] = id?.split('-');
                    if (ids?.length===2)
                        this.on(ids[0], ids[1]);
                }
            });
        }
    }

    on(arg1: string, arg2: string) {
        switch(arg1) {
            case 'tab':
                this.view.setView(Number(arg2));
                break;

            case 'add':
                let product: Product = JSON.parse(this.model.findProductById(Number(arg2)));
                if (product != null) {
                    this.view.slider.cartView.addProduct(product, 1);
                }
                break;
            
            case 'update':
                let from: number = this.view.slider.catalogView.filterView.noUISlider.from;
                let to: number = this.view.slider.catalogView.filterView.noUISlider.to;
                let search: string = this.view.slider.catalogView.filterView.searchFilter;
                let sort: number = this.view.slider.catalogView.filterView.sortMode;
                let req: string = `from=${from}&to=${to}&search=${search}&sort=${sort}`;
                console.log(req);
                this.view.slider.catalogView.productListView.update(this.model.request(req));
                break;
        }
    }


    setView(view: View) {
        this.view = view;
    }

    setModel(model: Model) {
        this.model = model;
    }

    navigate(url: string) {
        this.view.render();
        this.view.init();
        this.view.setView(0);

    }

}

export {Controller}