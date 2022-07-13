import { Utils } from '../utils/Utils';
import { FilterView } from '../view/catalogview/FilterView';
import {Product} from './Product';

class Model {
    db: Product[] = [];
    constructor() {

    }

    randomize(count: number) {
        this.db = [];
        for (let i: number = 0; i < count; i++) {
            let product: Product = new Product();
            product.id = i;
            product.color = ['black', 'white', 'gray', 'green', 'blue', 'brown', 'violet'][Utils.randomNumber(5)];
            product.count = 10+ Utils.randomNumber(10)*10;
            product.description = Utils.randomWords(50, 3);
            product.manufacturer = Utils.randomWord(7) + ' inc.';
            product.price = Utils.randomNumber(5) * 1000 + 990;
            product.releaseDate = 2010 + Utils.randomNumber(13);
            product.title = Utils.randomWords(2, 7);
            product.imageUrl = String(Utils.randomNumber(count));
            this.db.push(product);
        }
    }

    request(req: string): string {

        // from=1000&to=10000&sort=1&search=qwe

        console.log('model request', req);

        let result: Product[] = [];

        let from: number = null;
        let to: number = null;
        let sort: number = 0;
        let search: string = null;
        let id: number = null;

        let params: string[] = req.split('&');

        if(params.length > 0) {
            for (let i: number = 0; i < params.length; i++) {
                let arg: string[] = params[i].split('=');
                if (arg.length > 1) {
                    switch (arg[0]) {
                        case 'from':
                            from = Number(arg[1]);
                            break;
                        case 'to':
                            to = Number(arg[1]);
                            break;
                        case 'sort':
                            sort = Number(arg[1]);
                            break;
                        case 'search':
                            search = arg[1];
                            break;
                        case 'id':
                            id = Number(arg[1]);
                            break;
                    }
                }
            }            
        }

        if (id) {
            return this.findProductById(id);
        }

        // cloning array
        result = [...this.db];

        console.log('from, to, search', from, to, search);

        if (from != null)
            result = result.filter((e: Product) => {
                return e.price > from;
            })

        if (to != null)
            result = result.filter((e: Product) => {
                return e.price < to;
            })
        
        if (search != 'undefined') 
            result = result.filter((e: Product) => {
                return (e.title.indexOf(search) >= 0);
            })



        // sorting: 
        // 0: min price -> max price
        // 1: max price -> min price
        // 2: old release -> new release
        // 3: new release -> old release

        switch (sort) {
            case 0:
                result.sort((a, b) => {return Number(a.price - b.price)});
                break;
            case 1:
                result.sort((a, b) => {return Number(b.price - a.price)});
                break;
            case 2:
                result.sort((a, b) => {return Number(a.releaseDate - b.releaseDate)});
                break;
            case 3:
                result.sort((a, b) => {return Number(b.releaseDate - a.releaseDate)});
                break;
                        
        }


        let resp: string;



        //this.db.sort((a, b) => {return Number(b.price - a.price)});

        resp = JSON.stringify(result);

        return resp;
    }

    findProductById(id: number): string {
        for (let i: number = 0; i < this.db.length; i++) {
            if (id == this.db[i].id) {
                console.log(id);
                return JSON.stringify(this.db[i]);
            }
        }

        return null;
    }

}

export {Model};