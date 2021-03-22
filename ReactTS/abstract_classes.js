//when ever we know partial implementations, then we will choose abstarct classes.
//we will represent abstract classes by using "abstract" keyword.
//we can't create object to abstract classes.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    abstract class class_one{
        fun_one():string{
            return "hello_1";
        };
        abstract fun_two():string;
    };
    class class_two extends class_one{
        fun_two():string{
            return "hello_2";
        };
    };
    let obj:class_two = new class_two();
    console.log( obj.fun_one(), obj.fun_two() );
    //hello_1 hello_2
*/
/*
    abstract class class_one{
        abstract fun_one():string;
    };

    abstract class class_two extends class_one{
        abstract fun_two():string;
    };

    abstract class class_three extends class_two{
        abstract fun_three():string;
    };


    class final_class extends class_three{
        fun_one():string{
            return "hello_1";
        };
        fun_two():string{
            return "hello_2";
        };
        fun_three():string{
            return "hello_3";
        };
    };


    let obj:final_class = new final_class();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
    //hello_1 hello_2 hello_3
*/
/*
    interface interface1{
        fun_one():string;
    };

    abstract class class_one implements interface1{
        fun_one():string{
            return "hello_1";
        };
        abstract fun_two():string;
    };


    abstract class class_two extends class_one{
        abstract fun_three():string;
    };

    class final_class extends class_two{
        fun_two():string{
            return "hello_2";
        };
        fun_three():string{
            return "hello_3";
        };
    };

    let obj:final_class = new final_class();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
*/
//modifiers
//typescript supports following modifiers
//public
//private
//protected
//public
//public members, we can access "anywhere" in application
//public members, we can access by using class "objects"
//public members by default available to "child" classes
//public modifier applicable to "variables", "functions", "constructor"
//public modifier not applicable to "classes".
/*
class class_one{
    public var_one:string;
    public constructor(){
        this.var_one = "Hello_1";
    };
    public fun_one():string{
        return this.var_one;
    };
};

class class_two extends class_one{
    public var_two:string = "hello_2";
    public fun_two():string{
        return this.var_two;
    };
};

let obj:class_two = new class_two();
console.log( obj.fun_one(), obj.fun_two() );
//Hello_1 hello_2
*/
//private
//private members, won't accessable by using class objects
//private members, won't accessable to child classes
//private modifier applicable to variables, functions, and constructor
//Note : private modifier won't applicable to classes
/*
    class class_one{
        private var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        };
    };

    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
/*
    class class_one{
        private var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        };
        private fun_one():string{
            return this.var_one;
        };
    };
    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
    obj.fun_one();
    //Property 'fun_one' is private and only accessible within class 'class_one'.
*/
/*
    class class_one{
        private var_one:string = "Hello";
    };

    class class_two extends class_one{}

    let obj:class_two = new class_two();
    console.log( obj.var_one );
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
/*
    class class_one{
        private constructor(){}
    };
    let obj:class_one = new class_one();
    //Constructor of class 'class_one' is private and only accessible within the class declaration.
*/
//protected
//protected members, won't accessable by using class "objects".
//protected members "available" to child classes
//protected modifier applicable to "variables", "functions" and "constructor"
//Note : protected modifier won't applicable to "classes"
/*
    class class_one{
        protected var_one:string = "Hello_1";
        protected fun_one():string{
            return "Hello_2";
        };
    };
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.fun_one() );
    //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
*/
/*
    class class_one{
        protected constructor(){}
    };
    let obj:class_one = new class_one();
    //Constructor of class 'class_one' is protected and only accessible within the class declaration.
*/
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
    }
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = _this.var_one;
        return _this;
    }
    return class_two;
}(class_one));
;
var obj = new class_two();
//console.log( obj.var_one );
//Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
console.log(obj.var_two);