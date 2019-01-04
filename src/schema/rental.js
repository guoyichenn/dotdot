const { Movie } = require('./movie');

export class Rental {
  constructor(movie, daysRented) {
    this.movie = movie;
    this.daysRented = daysRented;
  }
  getCharge() {
    let result = 0;
    switch (this.movie.priceCode) {
      case Movie.REGULAR:
        result += 2;
        if (this.daysRented > 2) {
          result += (this.daysRented - 2) * 1.5
        }
        break;
      case Movie.NEW_RELEASE:
        result += this.daysRented * 3;
        break;
      case Movie.CHILDREN:
        result += 1.5;
        if (this.daysRented > 3) {
          result += (this.daysRented - 3) * 1.5
        }
        break;
    }
    return result;
  }
  getFrequentRenterPoints() {
    if ((this.movie.priceCode == Movie.NEW_RELEASE) && this.daysRented > 1) {
      return 2;
    } else {
      return 1;
    }
  }
}