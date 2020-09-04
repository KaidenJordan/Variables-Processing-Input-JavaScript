var number1=Number(prompt("What is your total bill?"));
var number2=.07;
var number3=.05;

var answer=(((number1*number2)+number1)*number3)+((number1*number2)+number1)

document.body.querySelector("#cool").innerHTML=answer;