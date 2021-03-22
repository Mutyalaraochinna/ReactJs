//string
//collection of characters called as "string"
//""(double quotes) , ''(single quotes) or ``(backtick)
//``(backtick) operator introduced in "ES6"
//``(backtick) operator used to create the paragraphs (multiline strings)

var sub:string = "ReactJS";
console.log( sub );


var my_sub:string = "ReactJS With TypeScript";
var wish:string = `Welcome to ${my_sub}`;
console.log( wish );    //Welcome to ReactJS With TypeScript


var tbl_name:string = "employees";
var sal:number = 50000;
var sql_query:string = `select * from ${tbl_name} where esal>=${sal}`;
console.log(sql_query);    //select * from employees where esal>=50000


var login_tbl:string = "users_tbl";
var u_name:string = "admin";
var u_pwd:string = "admin123";
var login_query:string = `select * from ${login_tbl} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log( login_query ); 
//select * from users_tbl where uname='admin' and upwd='admin123'



