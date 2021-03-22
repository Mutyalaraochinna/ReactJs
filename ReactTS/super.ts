//super is the keyword
//super keyword used to access the parent class constructor

class class_one{
    var_one:string;
    constructor(arg1:string){
        this.var_one = arg1;
    };
};

class class_two extends class_one{
    var_two:string;
    constructor(arg1:string,arg2:string){
        super(arg1);
        this.var_two=arg2;
    }
};

let obj:class_two = new class_two("Hello_1","Hello_2");
console.log( obj.var_one, obj.var_two );            //Hello_1 Hello_2