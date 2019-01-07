const { Movie } = require('./movie');

export class Rental {
  constructor(movie, daysRented) {
    this.movie = movie;
    this.daysRented = daysRented;
  }
  getCharge() {
    return this.movie.getCharge(this.daysRented);
  }
  getFrequentRenterPoints() {
    if ((this.movie.priceCode == Movie.NEW_RELEASE) && this.daysRented > 1) {
      return 2;
    } else {
      return 1;
    }
  }
}