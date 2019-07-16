'use strict';

var budget = window.prompt("What is your budget for this month?"); 
    alert("Your budget is " + budget);

var date = window.prompt("What date today (YYYY-MM-DD)?"); 
    alert("Today is " + date);

var mandatoryExpenses = window.prompt("Enter mandatory expences for this month"); 
alert("Mandatory expences is " + mandatoryExpenses);

var cost = window.prompt("How much it cost?"); 
    alert("Total cost = " + cost);

let appData = {
  budget: budget,
  timeData: date,
  expenses: {
      mandatoryExpenses : mandatoryExpenses,
      cost: cost
  },
  optionalExpense: {
  },
};
console.log(appData);

 alert("Your budget for 1 day  = " + cost/30);




 let money1 = prompt("Ваш бюджет на месяц?", ''),
	time1 = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData1 = {
	budget: money1,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time1,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData1.expenses.a1 = a2;
appData1.expenses.a3 = a4;

alert(appData1.budget / 30);
// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*9);
 
// let something;
// console.log(something);


// let persone = {
//     name: "Jonh",
//     age: 25,
//     isMarried: false
// };

// console.log(persone["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0])

//  alert('Hello Dear User')

// let answer = confirm('Are you ok??')

// console.log(answer);

// let answer = +prompt('Are you reach 18 y.o.?', 'Yes');

// console.log(typeof(answer));

// console.log('arr' + ' - object');
// console.log(4 + +' - object');



