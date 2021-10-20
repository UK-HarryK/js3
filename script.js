baseNum = Math.floor(Math.random()*100)
alert(baseNum)
function determineOddEven(number){
    remainder = number % 2
    if(remainder == 0){
        alert("This number is even")
    } else{
        alert("This number is odd")
    }
}
determineOddEven(baseNum)

num1 = prompt("Provide a number")
num2 = prompt("Provide a number")
function division(num1, num2){
    let remainder = num1 % num2
    let value = Math.floor(num1 / num2)
    if(remainder === 0){
        alert(`${num1} is wholly divisable into ${num2}`)
    } else{
        alert(`${num1} divides into ${num2} to make ${value} with ${remainder} remaining`)
    }
}
division(num1, num2)

people = parseInt(prompt("How many students"))
capacity = parseInt(prompt("How many people can fit on the bus?"))

function howManyBuses(students, busCapacity){
    let numOfBuses = Math.ceil(students/busCapacity)
    alert(`You need ${numOfBuses} buses to get the students to where they are going`)
}

howManyBuses(people, capacity)