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
 *  4.replace temp with query 变量 thisAmount 显得有点多余了，临时变量多余会导致大量参数传来传去，很容易跟丢他们
 *  5.同样的步骤 处理积分部分计算 extarct_method-> move_method
 *      replace_temp_with_query 两个计算总量的变量显得有点多余，
 *      我们用Customer类中 getTotalCharge（）代替 totalAmount,由于totalAmount在循环内被赋值，不得不把循环也复制到查询函数中
 *      同样对frequentRenterPoints变量也做同样的处理
 * 
 * 
 * 
 * step3 运用多态取代与价格相关的条件逻辑
 *  在movie类中，有多种影片类型，其计算价格方式也不会相同，所以我们可以用子类的方式，建立3个movie的子类
 *  这么以来就可以用多态来取代switch语句了，但是一部影片可以在自己生命周期内修改自己的分类，一个对象却不能
 *  于是还有一种解决方式 state模式
 *  1.replace type Code With state/Strategy - 将类型相关的行为搬移到state模式内
 *      第一步骤是针对代码使用self Encapsulate Field（自封装字段）
 *  2.move method - 将switch语句移到price类
 *      把 rental 类中计算charge的方法搬移到movie类中
 *  3.replace Conditional with Polymorphism - 去掉switch 语句 
 *                                                                          
 *  
 * 
 * 
 * 
 * 
 * 
 */