# Лабораторная работа №7

### Задание 1
```js
let firstVariable = prompt('var one');
let secondVariable= prompt('var two');
if (firstVariable === secondVariable) console.log('equally')
else console.log('not equally');
let stringVariable = 'world'; let anyVariable = anyVariable + stringVariable;
```

### Задание 2
```js
const fruitsArray = new Array(
    'apple',
    'strawberry',
    'blueberry',
    'raspberry',
    'lemon'
);
console.log(fruitsArray);
```
```js
fruitsArray.forEach(function(element){
    if (element === 'apple') console.log('apple green');
    if (element === 'strawberry') console.log('strawberry red');
    if (element === 'blueberry') console.log('blueberry blue');
    if (element === 'raspberry') console.log('raspberry light red');
    if (element === 'lemon') console.log('lemon yellow');
});
```
или
```js
fruitsArray.forEach((element)=>{
    switch(element){
        case 'apple':
            console.log('apple green');
            break;
        case 'strawberry':
            console.log('strawberry red');
            break;
        case 'blueberry':
            console.log('blueberry blue');
            break;
        case 'raspberry':
            console.log('raspberry light red');
            break;
        case 'lemon':
            console.log('lemon yellow');
            break;
    }
)};
```

### Задание 3
```js
let amountOfEmployees=prompt('Введите кол-во человек ', undefined);
if (!isNaN(parseFloat(amountOfEmployees))){
    amountOfEmployees=parseFloat(amountOfEmployees);
}else{
    amountOfEmployees = 0;
}
while(amountOfEmployees === 0){
    let amountOfEmployees=prompt('Введите кол-во человек ', undefined);
    if (!isNaN(parseFloat(amountOfEmployees))) {
        amountOfEmployees = parseFloat(d);
    }else{
        amountOfEmployees = 0;
    }
}
let salaryOfEmployees=prompt('Введите зарплату на человека ', undefined);
if (!isNaN(parseFloat(salaryOfEmployees))){
    k=parseFloat(salaryOfEmployees);
} else {
    salaryOfEmployees=0;
}
while(salaryOfEmployees === 0) {
    let salaryOfEmployees = prompt('Введите зарплату на человека ', undefined);
    if (!isNaN(parseFloat(k))) {
        salaryOfEmployees = parseFloat(k)
    } else {
        salaryOfEmployees = 0;
    }
}
alert(`Затраты на ЗП ${amountOfEmployees*salaryOfEmployees}`);
```

### Задание 4
```js
const studentsClass = [
    {fullName:'Назаров А.А.',assessment:5},
    {fullName:'Петров Б.Б.',assessment:3.4},
    {fullName:'Иванов В.В.',assessment:9},
    {fullName:'Новиков Г.Г.',assessment:2},
    {fullName:'Крутоголов Д.Д.',assessment:3.4}
];

let sumOfAssesment = 0;
let amountOfStudent = 0;
let underachievingStudents = [];

studentsClass.forEach((student)=>{
    if(student.assessment>5 || student.assessment<0){
        console.log(`${student.assessment} - Это значение учитываться не будет, оно не соответствует допустимым значениям`);
        return;
    }
    if(student.assessment<4) underachievingStudents.push(student);
    sumOfAssesment+=student.assessment;
    amountOfStudent++;
});

let averageAssesment = sumOfAssesment/amountOfStudent;
console.log(`Средняя оценка: ${averageAssesment}`);
console.log('Плохие студенты:');
if(underachievingStudents.length === 0 ) console.log('Таких нет');
else console.log(underachievingStudents);
```