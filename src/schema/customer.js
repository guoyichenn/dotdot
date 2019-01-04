const { Movie } = require('./movie');
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
            thisAmount = item.getCharge();
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