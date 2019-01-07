import { Movie } from './movie';
import { Price } from './price'
export class RegularPrice extends Price {
    constructor() {
        super();
    }
    getPriceCode() {
        return Movie.REGULAR;
    }
    getCharge() {
        let result = 0;
        result += 2;
        if (daysRented > 2) {
            result += (daysRented - 2) * 1.5
        }
        return result;
    }
}
