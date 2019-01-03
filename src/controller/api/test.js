/**
 * 第一个案例 
 * 优化点 1 希望以html格式输出详单 解决方式 需要在Customer类中重新写一个 htmlStatement()
 *         如果收费规则改变了怎么办 解决方式 必须同时改变 statement 和 htmlStatement
 *       2 用户希望改变影片分类规则 但是还是没有决定好怎么修改 设想的方案中 都会影响顾客消费和积分计算方式
 *         作为一个经验丰富的开发者 你可以肯定：不论用户提出什么方案，你唯一能获得的保证就是他们一定会在6个月之内再次修改它
 * 如果它没坏，就不要动它
 * 如果你发现自己需要为程序添加一个特性，而代码结构使你无法很方便的达成目的，那就先重构那个程序，使特性的添加比较容易的进行，然后再添加特性
 */
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
