import { Utils } from '../utils/Utils';
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
            product.color = ['black', 'white', 'red', 'green', 'blue'][Utils.randomNumber(5)];
            product.count = 10+ Utils.randomNumber(10)*10;
            product.description = Utils.randomWords(50, 3);
            product.manufacturer = Utils.randomWord(7) + ' inc.';
            product.price = Utils.randomNumber(5) * 1000 + 990;
            product.releaseDate = 2010 + Utils.randomNumber(13);
            product.title = Utils.randomWords(3, 7);
            product.imageUrl = String(Utils.randomNumber(count));
            this.db.push(product);
        }
    }

    request(req: string): string {
        let resp: string;
        if (req=='1')
            this.db.sort((a, b) => {return Number(a.price - b.price)});
        else if (req=='2')
            this.db.sort((a, b) => {return Number(b.price - a.price)});
        resp = JSON.stringify(this.db);

        return resp;
    }

}

export {Model};