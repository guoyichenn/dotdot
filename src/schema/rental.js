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
    return this.movie.getFrequentRenterPoints(this.daysRented);
  }
}