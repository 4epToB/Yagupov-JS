/* Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны. */
let mas1 = ["Привет",]
let mas2 = ["Привет"]
function compare(mas1,mas2){
    if(mas1.length==mas2.length){
       return true
    }else {return false}
    }
console.log(compare(mas1,mas2))
/* Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. */
function range(start,end,step=1){
    let output=[]
    output[0] = start 
    for (i = 1;output[i-1]+step<=end; i++){
        if(step>=end){
            break;
            }
        output[i]=output[i-1]+step
    }
    return output
}
console.log(range(2,12,3))
console.log(range(8,10,2))
console.log(range(5,6,2))

/* Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент,
а она выводит его содержимое. */
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
/* Написать генератор случайных “русских слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно. */
function random(min,max){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

let glas = "ауоыиэяюёе"
let soglas = "бвгджзйклмнпрстфхцчшщ"
let keys_glass=glas.split('')
let keys_soglass=soglas.split('')
let word = []
let randomLetngth=random(3,5)
if (random(0,1)==0){
    word[0]=keys_glass[random(0,9)]
    for(j=1;j<randomLetngth;j++){
        if (j%2!=0){word[j]=keys_soglass[random(0,20)]
        } else {
        word[j]=keys_glass[random(0,9)]
        }
    }
} else {
    word[0]=keys_soglass[random(0,20)]
    for(j=1;j<randomLetngth;j++){
        if (j%2!=0){word[j]=keys_glass[random(0,9)]
        } else {
        word[j]=keys_soglass[random(0,20)]
        }
    } 
}
console.log(word)

