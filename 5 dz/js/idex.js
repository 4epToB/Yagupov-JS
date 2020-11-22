let mas1 = 'Привет'
let mas2 = 'Привет'
function compare(mas1,mas2){
    if(typeof mas1=='string' && typeof mas2=='string'){
        if(mas1.length!=mas2.length){return false}
        else {return true}
    }
}
console.log(compare(mas1,mas2))

function range(start,end,step=1){
    let output=[]
    output[0] = start 
    for (i = 1;; i++){
        output[i]=output[i-1]+step
        if(output[i]+step>end){
            break;
            }
    }
    return output
}
console.log(range(2,12,3)

)


let student={
    "Имя":"Егор", 
    "Фамилия":"Ягупов", 
    "Возраст":29, 
    "Интересы":['Кино',"Музыка","Книги"], 
    "Место обучения":"Лэти",
}
function print(obj){
    for (let stud_prop in obj){
        console.log(stud_prop+":"+obj[stud_prop]
        )
    }
}
print(student)
//-----------------------------------------------//
function random(min,max){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

let glas = "ауоыиэяюёе"
let soglas = "бвгджзйклмнпрстфхцчшщ"
let keys_glass=glas.split('')
let keys_soglass=soglas.split('')
let word = []

if (random(0,1)==0){
    word[0]=keys_glass[random(0,9)]
    for(j=1;j<random(3,5);j++){
        if (j%2!=0){word[j]=keys_soglass[random(0,20)]
        } else {
        word[j]=keys_glass[random(0,9)]
        }
    }
} else {
    word[0]=keys_soglass[random(0,20)]
    for(j=1;j<random(3,5);j++){
        if (j%2!=0){word[j]=keys_glass[random(0,9)]
        } else {
        word[j]=keys_soglass[random(0,20)]
        }
    } 
}
console.log(word)

