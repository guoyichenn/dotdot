const Base = require('../base.js');
const { Customer } = require("./../../schema/customer");
const { Movie } = require("./../../schema/movie");
const { Rental } = require("./../../schema/rental");

module.exports = class extends Base {
    async indexAction() {
        let movie1 = new Movie('无问东西', 0);
        let movie2 = new Movie('spider man', 1);

        let esson = new Customer('esson');

        let essonWantMovie2 = new Rental(movie2, 3);

        esson.addRental(essonWantMovie2);

        let print = esson.statement();
        console.log(print);
        return this.success(print);
    }
};
