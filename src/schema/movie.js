
import { RegularPrice } from './regularPrice';
import { NewReleasePrice } from './newReleasePrice';
import { ChildrensPrice } from './childrensPrice';
export class Movie {
  constructor(title, priceCode) {
    this.title = title;
    this.priceCode = priceCode;
    this.price = {};
    this.setPriceCode(priceCode);
  }
  setPriceCode(arg) {
    switch (arg) {
      case Movie.REGULAR:
        this.price = new RegularPrice();
        break;
      case Movie.NEW_RELEASE:
        this.price = new NewReleasePrice();
        break;
      case Movie.CHILDREN:
        this.price = new ChildrensPrice();
        break;
    }
  }
  getCharge(daysRented){
    return this.price.getCharge(daysRented);
  }
}
Movie.CHILDRENS = 2;
Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;

