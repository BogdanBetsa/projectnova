/*console.log("hello");
var userName = "hello\" world";
console.log(userName);
var x=5;
console.log(x);
var x=3e5;
console.log(x);
var x=3e-5;
console.log(x);
var x=0xFF;
console.log(x);
var x=0b110001;
console.log(x);
var x=0123;
console.log(x);
var x=5;
console.log(typeof x)
var x="hello";
console.log(typeof x)
var x=null;
console.log(typeof x)
var x;
console.log(typeof x)
var x=5;
var y=6;
console.log(x+y);
var x=5;
var y=6;
x=7;
console.log(x+y);
var x=5;
console.log("hello"+x);
var x=5,
    y=7,
    c=x*y;
console.log(c);
var x=5,
    y=7,
    c=x+y*x;
console.log(c);
var x=5,
    y=7,
    c=(x+y)*x;
console.log(c);
var name="vasya",
    say="hello ";
console.log(say+name);
var name="vasya",
    say="hello";
console.log(say+" "+name);
var name="vasya",
    say="hello";
console.log(say*5);
var name="vasya",
    say="385";
console.log(say*5);
var name="vasya",
    say=+"385";
console.log(typeof say);
var name=prompt("Enter your name");
console.log(name);

var i=0;
i++;
console.log(i);

var n=0;
var c=n++;
console.log(n);
console.log(c);

var n=0;
var c=++n;
console.log(n);
console.log(c);

if(5==5){
    console.log("yes");
}

var x=prompt("enter x")
if(5===x){
    console.log("yes");
}*/

/*var x=prompt("enter x")
if(5===x){
    console.log("yes");
    console.log("Hello");
}else{
    console.log("No, you can enter other number");
}*/

/*var year =prompt("Введите год");
if(year=2000){
    console.log("welcome to " +year);
}else if(year==2001){
    console.log("welcome 2001");
}else if(year==2002){
    console.log("welcome 2002");
}*/

/*var age =prompt("Введите возраст");
if(age<2){
    console.log("Младенец");
}
else if(age >= 2 && age <= 10){
    console.log("Ребенок");
}
else if(age >= 10 && age <= 54){
    console.log("Подросток");
}
else if(age >= 55 && age <= 99){
    console.log("Пенсионер");
}
if(age >= 55 && age <=65){
    console.log("Женский");
}
else if(age >65 && age <=99){
    console.log("Mужской");
}*/

/*var month = prompt("Введите месяц");
switch (month) {
    case "январь":
        console.log("зима");
        break;
    case "февраль":
        console.log("зима");
        break;
    case "март":
        console.log("весна");
        break;
    case "апрель":
        console.log("весна");
        break;
    case "май":
        console.log("весна");
        break;
    case "июнь":
        console.log("лето");
        break;
    case "июль":
        console.log("лето");
        break;
    case "август":
        console.log("лето");
        break;
    case "сентябрь":
        console.log("осень");
        break;
    case "октябрь":
        console.log("осень");
        break;
    case "ноябрь":
        console.log("осень");
        break;
    case "декабрь":
        console.log("зима");
        break;
    default:
        console.log("Вы ввели неверно месяц");
        break;
}*/
/*var arr = [23, null, 'vasya', true, [32, 3]];
console.log(arr[4][0]);

var arr = [23, null, 'vasya', true, [32, 3]];
arr[1] = 'petya'
console.log(arr);

var arr = [23, null, 'vasya', true, [32, 3]];
arr[1] = 'petya'
console.log(arr.length);

var str = "hello world"
console.log(str[0]);

var arr = [23, null, 'vasya', true, [32, 3]];
arr[1] = 'petya'
arr[10] = 13;
console.log(arr);

var user = {
    name: "Misha",
    age: 35,
    gender: "Male",
    email: "misha@gmail.com"
};
user.age
user["name"]

var users = [
    {
        name: "Misha",
        age: 35,
        email: "misha@gmail.com"
    },
    {
        name: "Sasha",
        age: 38,
        email: "sasha@gmail.com"
    },
    {
        name: "Kolya",
        age: 40,
        email: "kolya@gmail.com"
    }
];
users[1].name

var smartphone = {
    size: {
        value: 5,
        metric: "inch"
    },
    color: "black",
    brand: "meizu",
    model: "MX3",
    phonebook: [
        {
            name: "Misha",
            tel: "30507654321"
        },
        {
            name: "Gregori",
            tel: "380501234567"
        }
    ]
};
console.log(smartphone.brand)
console.log(smartphone.phonebook[0].tel)*/

/*var i;
for (i = 0; i < 10; i++) {
    console.log(i);
}

var users = ["Kolya", "Misha", "Masha", "Grisha"];
for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
    if (users[i] == "Misha") {
        break;
    }
}

var i = 0;
while (i < 10) {
    i++;
}

var q = true;
do {
    q = confirm("Вы действительно хотите удалить?");
} while (q);*/

/*function sayHello(name){
    console.log("Hello " + name);
}
sayHello("Petya");
sayHello("Vasya");

function polyndrom(number){
    
    
    
   
}
var num = prompt("Введите число");
polyndrom("num");
 
function polyndrom(){
    console.log(arguments);
    
    
   
}
var num = prompt("Введите число");
polyndrom(32, 43, 54, 65);*/

/*function mySum(x, y) {
    return x + y;
}
var z = mySum(5, 6);
console.log(10 * z);*/

/*function getMax(){
    var max = arguments[0];
    for(var i = 0, i < arguments.length; i++){
        if(max < arguments[i]){
            max = arguments[i];
        }
    }
    
    return max;
}
var x = getMax(35, 40, 36, 80, 15, 30);
console.log(x);*/
/*//function declaration
function getNum(num) {
    console.log(num)
};
getNum(5);

//function expression
var getNum = function (num) {
    console.log(num)
};
getNum(5);

var getNum = function (num) {
    return num
};
var x = getNum(5);
var x2 = getNum;
console.log(x, typeof x2);*/

/*function getNum(callback) {
    var c = 10 * 5;
    callback(c);
}
var num = function (x) {
    console.log(x + 5);
}
getNum(function (x) {
    console.log(x + 5);
});*/

/*var smartphone = {
    color: "white",
    diagonal: "5 inch",
    call: function (tel) {
        console.log("call to " + tel)
    },
    sendsms: function (msg) {
        console.log ("send sms to " + msg)
    }
};
smartphone.call("30987654321");
smartphone.sendsms("30987654321");*/
function getx() {
    getx();
}
getx();
var nun = prompt("Enter number")



