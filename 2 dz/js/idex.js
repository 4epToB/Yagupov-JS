
var monthNum=parseInt(prompt('Введите номер месяца', '1-12'));
if(monthNum==11 || monthNum==1 || monthNum==2 ){
    alert('Это зима')
}else if(monthNum==3 || monthNum==4 || monthNum==5 ){
    alert('Это весна')
}else if(monthNum==6 || monthNum==7 || monthNum==8 ){
    alert('Это лето')
} else {
    alert('Это осень')
}


var unitName=parseInt(prompt('Введите номер единицы длинны. 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр.', '1-5'));
var length=parseInt(prompt('Введите длину в указанных единицах'));
switch (unitName){
    case 1: 
        length=length/10;
        alert(length+'м');
        break;
    case 2: 
        length=length*1000
        alert(length+'м')
        break
    case 3: 
        alert(length+'м')
        break
    case 4: 
        length=length/1000
        alert(length+'м')
        break
    case 5: 
        length=length/100
        alert(length+'м')
        break
}

var chislo=parseInt(prompt('Введите целое число, лежащее в диапазоне от -999 до 999.', '-999 до 999'));
if(chislo<-9 && chislo>-100){
    alert('Отрицательное двузначное число')
}else if (chislo==0){
    alert('это ноль!')
}else if (chislo>0 && chislo<10){
    alert('Положительное однозначное число')
}else if (chislo<0 && chislo>-10){
    alert('Отрицательное однозначное число')
}else if (chislo>-1000 && chislo<-99){
    alert('Отрицательное трёхзначное число')
}else if (chislo>100 && chislo>9){
    alert('Положительное двузначное число')
}else if (chislo>1000 && chislo>99){
    alert('Положительное трехзначное число')
}

var massive=1
do{ 
    if (massive%5==0 && massive%3==0){console.log('ThreeFive')} 
    (massive%3==0)?console.log('Three'):((massive%5==0)?console.log('Five'):console.log(massive))
    massive++
}while(massive<=100)

var year=parseInt(prompt('Введите год'));
(year%400==0)?console.log(year,'– високосный год'):((year%4==0 && year%100!=0)?console.log(year,'– високосный год'):console.log(year,'– не високосный год'))

var plate=parseInt(prompt('Введите количетсов тарелок,шт'));
var fary=parseInt(prompt('Введите количетсов Фейри,гр'));

for (i=fary/0.5;i>0;i--){
    fary=fary-0.5
    --plate
    console.log('Средства-',fary,'Тарелок-',plate)
    if (plate==0 && fary>0){
        break;
    }
}