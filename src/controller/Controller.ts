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
                        console.log(ids);
                        if (ids[0]==='tab'){
                            this.view.slider.catalogView.productListView.update(this.model.request(''));
                            this.view.setView(Number(ids[1]));
                            this.view.slider.catalogView.colapse(ids[1] != '1');

                            return;
                        } else {
                            if ((ids[0]==='button') && (ids[1]==='search')) {
                                console.log('search')                                
                            } else if ((ids[0]==='button') && (ids[1]==='price')) {
                                this.view.slider.catalogView.filterView.switch(1);
                                this.view.slider.catalogView.productListView.update(this.model.request('1'));
                            } else if (ids[0]==='button') {
                                this.view.slider.catalogView.filterView.switch(2);
                                this.view.slider.catalogView.productListView.update(this.model.request('2'));
                            } else if (ids[0]==='add') {
                                let product: Product = JSON.parse(this.model.findProductById(Number(ids[1])));
                                console.log(product);
                                if (product != null)
                                    this.view.slider.cartView.addProduct(product, 1);
                            }
                        }
                            
                }
            });
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
        this.view.setView(1);

        let product: Product = JSON.parse(this.model.findProductById(Number(1)));
        console.log(product);
        if (product != null)
            this.view.slider.cartView.addProduct(product, 1);
        product = JSON.parse(this.model.findProductById(Number(22)));
        console.log(product);
        if (product != null)
        this.view.slider.cartView.addProduct(product, 1);
        product = JSON.parse(this.model.findProductById(Number(33)));
        console.log(product);
        if (product != null)
            this.view.slider.cartView.addProduct(product, 1);
        product = JSON.parse(this.model.findProductById(Number(14)));
        console.log(product);
        if (product != null)
            this.view.slider.cartView.addProduct(product, 1);
    

        this.view.slider.catalogView.productListView.update(this.model.request(''));
    }

    interceptClickEvent(e: any) {


       /* let href;
        let target = e.target || e.srcElement;
        if (target.tagName === 'A') {
            href = target.getAttribute('href');
            console.log(href);
            if (true) {
                e.preventDefault();
            }
        }
        */
    }



}

export {Controller}