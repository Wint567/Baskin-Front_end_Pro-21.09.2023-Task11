//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (i = 20; i <= 30; i += 0.5){
    console.log(i);
}

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const exchangeRate = 27;
for (dollar = 10; dollar <=100; dollar += 10){
    const grivna = dollar * exchangeRate;
    console.log(`${dollar} доларів = ${grivna} гривень`);
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const N = parseInt(prompt("Введіть число N "));
for (i = 1; i <= 100; i++){
    if (i * i <= N){
        console.log(i);
    }
}

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
function isPrime(number){
    if (number <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){  
            return false;
        }
    }
    return true;
}

const num = parseInt(prompt("Введіть ціле число "));
if (isPrime(num)) {
    console.log(`${num} є простим числом`);
}   else {
    console.log(`${num} не є простим числом`);
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
function a (numeric){
    if(numeric <= 0 ){
        return false;
    }
    while (numeric !== 1){
        if (numeric % 3 !== 0){
            return false;
        }
        numeric /= 3;
    }
    return true;
}

const b = parseInt(prompt("Введіть число"));
if (a(b)) {
    console.log(`${b} можна отримати шляхом зведення числа 3 у деякий ступінь`);
} else {
    console.log(`${b} не можна отримати шляхом зведення числа 3 у деякий ступінь`);
}

