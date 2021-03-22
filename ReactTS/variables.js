//string
//collection of characters called as "string"
//""(double quotes) , ''(single quotes) or ``(backtick)
//``(backtick) operator introduced in "ES6"
//``(backtick) operator used to create the paragraphs (multiline strings)
var sub = "ReactJS";
console.log(sub);
var my_sub = "ReactJS With TypeScript";
var wish = "Welcome to " + my_sub;
console.log(wish); //Welcome to ReactJS With TypeScript
var tbl_name = "employees";
var sal = 50000;
var sql_query = "select * from " + tbl_name + " where esal>=" + sal;
console.log(sql_query); //select * from employees where esal>=50000
var login_tbl = "users_tbl";
var u_name = "admin";
var u_pwd = "admin123";
var login_query = "select * from " + login_tbl + " where uname='" + u_name + "' and upwd='" + u_pwd + "'";
console.log(login_query);