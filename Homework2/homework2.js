//***************************Task 1***************************

console.log("Task 1");
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);
res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);
res3 = Boolean(x+y);
console.log(res3);
console.log(typeof res3);
res4 = parseInt(Boolean(x));
console.log(res4);
console.log(typeof res4);
console.log("\n")

//***************************Task 2***************************

let askNumber = prompt("Enter number for task 2 (even/positive number)");
console.log("Task 2");
if (askNumber>0 && askNumber%2==0){
    console.log(askNumber," is even positive number");
    if (askNumber%7==0){
        console.log(askNumber, "is multiple of 7 => ","result = ", askNumber/7);
    }
    else if (askNumber%7!=0){
       console.log(askNumber, "is NOT multiple of 7");
    }
} 
else if (askNumber>0 && askNumber%2!=0){
     console.log(askNumber," just positive number");
     if (askNumber%7==0){
        console.log(askNumber, "is multiple of 7 => ","result = ", askNumber/7);
    }
    else if (askNumber%7!=0){
       console.log(askNumber, "is NOT multiple of 7");
    }
}
else if (askNumber<0 && askNumber%2==0){
    console.log(askNumber," just even number ");
    if (askNumber%7==0){
        console.log(askNumber, "is multiple of 7 => ","result = ", askNumber/7);
    }
    else if (askNumber%7!=0){
       console.log(askNumber, "is NOT multiple of 7");
    }
}
else if (askNumber<0 && askNumber%2!=0){
    if (askNumber%7==0){
        console.log(askNumber, "is multiple of 7 => ","result = ", askNumber/7);
    }
    else if (askNumber%7!=0){
       console.log(askNumber, "is NOT multiple of 7");
    }
    console.log(askNumber," isn`t even or positive number");
}
else if (askNumber==0){
    console.log("It`s ",askNumber);
}
else {
    console.log(askNumber, "is not a number!");
}

console.log("\n")

//***************************Task 3***************************

console.log("Task 3");
arr = [1,"apple",true,null];
console.log(arr);
console.log("Number of elemets in the array: ",arr.length);
askNewElement = prompt("Enter new element of array for task 3");
arr[4] = askNewElement;
console.log("New array: ",arr);
console.log("5th element of array: ",arr[4]);
arr.shift();
console.log("New version of array without 1st element: ",arr);
console.log("\n")
//***************************Task 4***************************

console.log("Task 4");
let cities = ["Rome","Lviv","Warsaw"];
citiesNew = cities.join(); //метод, який об'єднує всі елементи масиву в один 
console.log("Original array: ",cities);
//console.log("Array after association: ",citiesNew);
//метод replaceAll() який замінює елементи зі значенням першого параметру на елементи зі значенням другого параметру
result = citiesNew.replaceAll(",","*");
resultArr = [result];
console.log(resultArr);
console.log("\n")
//***************************Task 5***************************

isAdult = prompt("Task5. How old are you?");
if (isAdult>=18){
    alert("Task 5. You are adult! ");
}
else if (isAdult<18) {
    alert ("Task 5. You are too young! ");
}
else {
    alert("Incorrect data! ");
}


//***************************Task 6***************************
alert("Task 6");
let a = +prompt("Enter 1st side of triangle - a");
let b = +prompt("Enter 2d side of triangle - b");
let c = +prompt("Enter 3d side of triangle - c"); 
if (b+c>a && c+a>b && b+a>c) {
    let perimetrGerone = (a + b + c)/2;
    //console.log(perimetrGerone.toFixed(3));
    let area = Math.sqrt(perimetrGerone*(perimetrGerone-a)*(perimetrGerone-b)*(perimetrGerone-c));
    console.log("Task 6");
    console.log("\n")
    console.log("This is area of the triangle: ",area.toFixed(3));
    if ( (a**2 == c**2+b**2)|| (b**2==c**2+a**2) || (c**2 == a**2+b**2)){
        console.log("Triangle is rectangular");
    }
    else {
        console.log("Triangle isn`t rectangular");
    }
}
else if ( a<=0 || b<=0 || c<=0 ) {
    console.log("A side of triangle can`t be negative or 0!");
}
else {
    console.log("Incorrect data!");
}

console.log("\n")
//***************************Task 7***************************

console.log("Task 7");
let currentTime = new Date();
//currentTime = currentTime.getHours();

// 1 method if()

console.log("Method if()");
if (( 23<=currentTime.getHours() &&  currentTime.getHours()<=24) || ( 0<=currentTime.getHours() && currentTime.getHours()<5 )){

    console.log("Good night!", currentTime);
} 
else if (6<=currentTime.getHours() && currentTime.getHours()<=11 ){

    console.log("Good morning!", currentTime);
} 
else if (12<=currentTime.getHours() && currentTime.getHours()<=17){
    console.log("Good afternoon!", currentTime);
} 
else if (17<=currentTime.getHours() && currentTime.getHours()<=22 ){
    console.log("Good evening!", currentTime);
}
console.log("\n");
 // 2 method switch()

console.log("Method switch() ");
switch(currentTime.getHours()){
    case 23:
        console.log("Good night!", currentTime);
        break;
    case 24:
        console.log("Good night!", currentTime);
        break;
    case 1:
        console.log("Good night!", currentTime);
        break;
    case 2:
        console.log("Good night!", currentTime);
        break;
    case 3:
        console.log("Good night!", currentTime);
        break;
    case 4:
        console.log("Good night!", currentTime);
        break;
    case 5:
        console.log("Good night!", currentTime);
        break;
    case 6:
        console.log("Good morning!", currentTime);
        break;
    case 7 :
        console.log("Good morning!", currentTime);
        break;
    case 8 :
        console.log("Good morning!", currentTime);
        break;
    case 9 :
        console.log("Good morning!", currentTime);
        break;
    case 10 :
        console.log("Good morning!", currentTime);
        break;
    case 11 :
        console.log("Good morning!", currentTime);
        break;
    case 12 :
        console.log("Good afternoon!", currentTime);
        break;
    case 13 :
        console.log("Good afternoon!", currentTime);
        break;
    case 14 :
        console.log("Good afternoon!", currentTime);
        break;
    case 15 :
        console.log("Good afternoon!", currentTime);
        break;
    case 16 :
        console.log("Good afternoon!", currentTime);
        break;
    case 17 :
        console.log("Good afternoon!", currentTime);
        break;
    case 18 :
        console.log("Good evening!", currentTime);
        break;
     case 19 :
        console.log("Good evening!", currentTime);
        break;
     case 20 :
        console.log("Good evening!", currentTime);
        break;
     case 21 :
        console.log("Good evening!", currentTime);
        break;
     case 22 :
        console.log("Good evening!", currentTime);
        break;
    default:
        console.log("I have no idea!");
    
    }






