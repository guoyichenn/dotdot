const { Movie } = require('./movie');

const amountFor = function (aRental) {
    let result = 0;
    switch (aRental.movie.priceCode) {
        case Movie.REGULAR:
            result += 2;
            if (aRental.daysRented > 2) {
                result += (aRental.daysRented - 2) * 1.5
            }
            break;
        case Movie.NEW_RELEASE:
            result += aRental.daysRented * 3;
            break;
        case Movie.CHILDREN:
            result += 1.5;
            if (aRental.daysRented > 3) {
                result += (aRental.daysRented - 3) * 1.5
            }
            break;
    }
    return result;
}
export class Customer {
    constructor(name) {
        this.name = name;
        this.rentals = [];
    }
    /**
     * 客户租赁电影
     * @param {*} rentalName 
     */
    async addRental(rentalName) {
        await this.rentals.push(rentalName);
    }
    /**
     * 生成详单
     */
    async statement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let rentals = this.rentals;
        let result = " Rental Record for " + this.name + " \n ";
        rentals.forEach(item => {
            let thisAmount = 0;
            thisAmount = amountFor(item);
            frequentRenterPoints++;
            if ((item.movie.priceCode == Movie.NEW_RELEASE) && item.daysRented > 1) {
                frequentRenterPoints++;
            }
            result += ' \t ' + item.movie.title + " \t " + thisAmount + " \n ";
            totalAmount += thisAmount;
        })
        result += " Amount owed is " + totalAmount + " \n ";
        result += " You earned " + frequentRenterPoints + " frequent renter points ";
        return result;
    }
}