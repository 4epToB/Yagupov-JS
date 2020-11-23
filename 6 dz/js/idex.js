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

//------------------------------------------------------------------------//

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
    return function() {
        num=random(0,temp.length)           
        t=temp.splice(num-1,1)   // я вывожу число которое на самом деле только что удалил из массива ,правда вывожу его в виде массива
        deltemp.unshift(t)            // не допер как положить этот массива как элемент в подготовленный массив  deltemp ,без цикла
        return t;                           
    }
  }
  
let counter = randomizer();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())


//------------------------------------------------------------------------//
let student={
    "Имя":"Егор", 
    "Фамилия":"Ягупов", 
    "Возраст":29, 
    "Интересы":['Кино',"Музыка","Книги"], 
    "Место обучения":"Лэти",
    spravka() { 
    console.log(this["Фамилия"]+" "+this["Имя"]+". "+this["Возраст"]+"лет. Интересы:"+this["Интересы"]+". Закончил "+this["Место обучения"]+".");
  }
}
student.spravka()
//------------------------------------------------------------------------//
function fak(n){
    if (n==1){
        return n
    }else{
        return n*fak(n-1)
    }
}
console.log(fak(4))
//------------------------------------------------------------------------//
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