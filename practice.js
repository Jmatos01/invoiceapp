console.log("working");

var oper1 = 20 + 4
var oper2 = 30 - 6
var oper3 = 12 * 2
var oper4 = 48/2


console.log(oper1,oper2,oper3,oper4)

// Q2 

var op1 = 6%3
var op2 = 10%2
var op3 = 5%2

console.log(op1 == op2)
console.log(op3 < op1)

//Q3


var line1 = "test grade as follows: /n"
var line2 = "\t student 1: 96\n"
var line3 = "\t .comment: \"none\""

console.log(line1 + line2 + line3)

//Q4
var weather = ['cloudy','suunny','rainy', 67]
console.log('the weather today is ')

//Q5

var numbers = [10,24,55,69,70,97,98,91,17,89]
console.log(numbers[2] + numbers[4])

//Q6

var me = {
    name: "John Matos",
    age: "25",
    height: '5"8',
    nationality: "Dominican",
    animal: "dog"
}
console.log(`Hi I am ${me.name} and I am ${me.age}. I am ${me.height} in height, I also am ${me.nationality} and my favorite animal is ${me.animal}`)

//Q7

var num = 1
while(num < 10){
    if(num % 2 === 0){
        console.log(num)
    }
    num++
}

for( var i=1; i<1; i+=2){
    if(i % 2 !== 0){
        console.log(i)
    }
}

console.log(1 % 2)