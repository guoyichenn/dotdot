import { Movie } from './movie';
import {Price} from './price'
export class NewReleasePrice extends Price {
    constructor() {
        super();
    }
    getPriceCode(){
         return Movie.NEW_RELEASE;
    }
    getCharge(daysRented){
        let result = 0;
        result += daysRented * 3;
        return result;
    }
}
