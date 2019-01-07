import { Movie } from './movie';
import { Price } from './price'
export class ChildrensPrice extends Price {
    constructor() {
        super();
    }
    getPriceCode() {
        return Movie.CHILDRENS;
    }
    getCharge(daysRented) {
        let result = 0;
        result += 1.5;
        if (daysRented > 3) {
            result += (daysRented - 3) * 1.5
        }
        return result;
    }
}
