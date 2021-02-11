/* Реализовать функцию foo:
let a = {
name: 'static',
count: 0
}
console.log(foo(a, 'count', 10));  В консоль выведет: [{name:'static', count:0},
{name:'static', count:1}, ..., {name:'static', count:9}]  */

let a = {
    name: 'Егор',
    count: 0
}
function foo(obj,start,end){
    let output=[]
    let iCount=end-start 
    for(let i=0;i<=iCount;i++){
        let b={}
        for(let key in obj){
            b[key]=obj[key]
        }
        b.count=start++
        output[i]=b
}
return console.log(output)
}
foo(a,2,11)
/* Сделайте функцию, каждый вызов который будет генерировать одно случайное число от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен
хранится массив чисел, которые уже были сгенерированы функцией. */

function random(min,max){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


function randomizer() {  
let deltemp=[]
let temp=[]
    let j=1
    for (i=0;i<=99;i++){
        temp[i]=j
        j++ 
    }
    console.log(deltemp)
    return function() {
        num=random(0,temp.length)           
        t=temp.splice(num-1,1)[0]   // я вывожу число которое на самом деле только что удалил из массива ,правда вывожу его в виде массива
        deltemp.push(t)            // не допер как положить этот массива как элемент в подготовленный массив  deltemp ,без цикла
        return t;                           
    }
  }
  
let counter = randomizer();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())


/* Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод объекта выводящий в консоль биографическую справку в виде, например:
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО. */
let student={
    "Имя":"Егор", 
    "Фамилия":"Ягупов", 
    "Возраст":29, 
    "Интересы":['Кино',"Музыка","Книги"], 
    "Место обучения":"Лэти",
    spravka() { 
    console.log(this["Фамилия"]+" "+this["Имя"]+". "+this["Возраст"]+" лет. Интересы:"+this["Интересы"]+". Закончил "+this["Место обучения"]+".");
  }
}
student.spravka()
/* Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1 */
function fak(n){
    if (n==1){
        return n
    }else{
        return n*fak(n-1)
    }
}
console.log(fak(4))
/* Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию,
определяющую порядок сортировки. Массив для тестирования:
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},]; */
let arr = [ 
    { 'price' : 10, 'count' : 2 }, 
    { 'price' : 5, 'count' : 5}, 
    { 'price' : 8, 'count' : 5 }, 
    { 'price' : 12, 'count' : 4 },
    { 'price' : 8, 'count' : 4},
];
arr.sort(function (a, b) {
    return a['price']-b['price']});
console.log(arr)