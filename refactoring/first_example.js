/**
 * step1 建立一组可靠的测试环境
 * 
 * step2 分解并重组 statement()
 *  1.extract method 找出逻辑泥团
 *     switch语句 （任何不会被修改的变量都可以被当成参数传入新的函数,如果只有一个变量会被修改，可以把它当作返回值）
 *     重构技术就是以微小的步伐修改程序。如果你犯下错误，很容易便可发现它
 *  2.修改变量名字
 *     更改变量名称是值得的行为吗？绝对值得，好的点吗应该清楚的表达自己的功能，变量名称是代码清晰的关键
 *  3.move method 观察amountFor()的时候，发现这个函数使用了来自Rental类的信息，却没有使用Customer类的信息，应该给它搬个家
 *     适应新家意味着要去掉参数，此外，我还要在搬移的同时变更函数名称
 *     本例之中，这个步骤很简单，因为我刚才产生的新函数，只有一个地方使用了，一般情况下，你得在可能运用该函数的说有类中查找一遍
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 */