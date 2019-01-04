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
        let rentals = this.rentals;
        let result = " Rental Record for " + this.name + " \n ";
        rentals.forEach(item => {
            result += ' \t ' + item.movie.title + " \t " + item.getCharge() + " \n ";
        })
        result += " Amount owed is " + this.getTotalCharge() + " \n ";
        result += " You earned " + this.getTotalFrequentRenterPoints() + " frequent renter points ";
        return result;
    }
    getTotalCharge(){
        let result = 0; 
        if(this.rentals && this.rentals.length){
            this.rentals.forEach(item =>{
                result += item.getCharge();
            })
        };
        return result;
    }
    getTotalFrequentRenterPoints(){
        let result = 0; 
        if(this.rentals && this.rentals.length){
            this.rentals.forEach(item =>{
                result += item.getFrequentRenterPoints();
            })
        };
        return result;
    }
    
}