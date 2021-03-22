//when ever we know the zero implementation, then we will choose "interfaces"
//we will define interfaces by using "interface" keyword.
//interrfaces implementation provided by either "classes" of "json"


/*
    interface interface1{
        sub_one:string;
        sub_two:string;
        sub_three:string;
    };
    let obj1:interface1 = {
        sub_one : "Angular11",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    };
    let obj2:interface1 = {
        sub_one : "ReactJS",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    };
    class class_one implements interface1{
        sub_one = "VueJS";
        sub_two = "Deno";
        sub_three = "CassandraDB";
    };
    console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );              //Angular11 NodeJS MongoDB
    console.log( obj2.sub_one, obj2.sub_two, obj2.sub_three );              //ReactJS NodeJS MongoDB
    let obj3:class_one = new class_one();
    console.log( obj3.sub_one, obj3.sub_two, obj3.sub_three );              //VueJS Deno CassandraDB
*/



/*
    interface interface1{
        var_one:string;
        fun_one : any;
    };
    let obj1:interface1 = {
        var_one : "Hello_1",
        fun_one : ():any=>{
            return obj1.var_one;
        }
    };
    console.log( obj1.fun_one() );    //Hello_1
*/


/*
    interface interface1{
        fun_one:any;
        fun_two:any;
        fun_three:any;
    };
    let obj1:interface1 = {
        fun_one : ():any=>{ return "Hello_1" },
        fun_two : ():any=>{ return "Hello_2" },
        fun_three : ():any=>{ return "Hello_3" }
    };
    console.log( obj1.fun_one(), obj1.fun_two(), obj1.fun_three() );
    //Hello_1 Hello_2 Hello_3
    class class_one implements interface1{
        fun_one():any{
            return "Hello_1";
        };
        fun_two():any{
            return "Hello_2";
        };
        fun_three():any{
            return "Hello_3";
        };
    };
    let obj:class_one = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
*/

interface interface1{
    fun_one : any;
};
interface interface2{
    fun_two : any;
};
interface interface3 extends interface1,interface2{
    fun_three : any;
};
let obj:interface3 = {
    fun_one : ():any=>{
        return "MEAN Stack";
    },
    fun_two : ():any=>{
        return "MERN Stack";
    },
    fun_three : ():any=>{
        return "MEVN Stack";
    }
};
console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
//MEAN Stack MERN Stack MEVN Stack