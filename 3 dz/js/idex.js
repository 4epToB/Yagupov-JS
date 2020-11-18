let A = [ 12, 4, 3, 10, 1, 20 ]  
let B = [-3, -7, -100, -33]  
let C=A.concat(B) //let C=B.concat(A)

var area = [ 1, null, 0, null, 1, null, null, null, null ]
let startTable="<table><tbody>";
let endTable="</tbody></table>";

for(var i=0;i<area.length;i++){
    if (area[i]==null){area[i]=""
    }else if (area[i]==1){area[i]="X"
    }else if (area[i]==0){area[i]="O" 
}}
let bodyTable = "<tr style='background-color:grey; height:30px'>"+"<td>"+ area[0]+"</td>"+"<td>"+ area[1]+"</td>"+"<td>"+ area[2]+"</td>"+"</tr>" + "<tr style='background-color:grey; height:30px'>"+"<td>"+ area[3]+"</td>"+"<td>"+ area[4]+"</td>"+"<td>"+ area[5]+"</td>"+"</tr>" + "<tr style='background-color:grey; height:30px'>"+"<td>"+ area[6]+"</td>"+"<td>"+ area[7]+"</td>"+"<td>"+ area[8]+"</td>"+"</tr>"
document.write(startTable+bodyTable+endTable)   



let mas = [12,4,3,10,1,20]
console.log(mas)
for(var j=0;j<mas.length-1;j++){
    if (mas[j]>mas[j+1]){
        var temp=mas[j]
        mas[j]=mas[j+1]
        mas[j+1]=temp
    }
}
mas.pop();
console.log(mas)

for(var k=mas.length-1;k>=1;k--){
    if (mas[k]<mas[k-1]){
        var temp2=mas[k]
        mas[k]=mas[k-1]
        mas[k-1]=temp2
        console.log[mas]
    }
}
mas.shift();
console.log(mas)

let count=0;
for (let c=1001;c<=999999;c++){// раньше чем 001001 счастливых билетов нет,нет смысла искать раньше
    let f=(c+"").split('') // делаем из числа строку и разбиваем на эл. массива
    if (f.length==4){ // если число 4х значное,добавляем перед ним два нуля
        f.unshift(0,0)
        for (let t=0;t<=5;t++){//каждый эл. массива приводим к числу
            f[t]=parseInt(f[t])
            }
        if((f[0]+f[1]+f[2])==(f[3]+f[4]+f[5])){++count}//проверяем сумму ,прибавляем к счетчику
    }else if (f.length==5){
        f.unshift(0)
        for (let t=0;t<=5;t++){
            f[t]=parseInt(f[t])
            }
        if((f[0]+f[1]+f[2])==(f[3]+f[4]+f[5])){++count}
    }else if (f.length==6){
        for (let t=0;t<=5;t++){
            f[t]=parseInt(f[t])
            }
        if((f[0]+f[1]+f[2])==(f[3]+f[4]+f[5])){++count}
    }
}
console.log(count)




let weightsOriginal=[2, 7, 4, 1, 8, 1]
console.log(weightsOriginal)
let weights=weightsOriginal.slice()
while (weights.length>=1){
    if (weights.length == 2 && weights[0]==weights[1]) {
            console.log("0. Молекул не осталось")
            break;
        }
    if (weights.length == 1) {
        console.log("Вес последней молекулы", weights[0])
        break;
        }
    weights.sort(function(a, b) {
        return b - a;
    })
    console.log("q=",weights.length, weights)
    if (weights[0]==weights[1]){weights.splice(0,2)
    }else{
        weights[1]=weights[0]-weights[1]
        weights.splice(0,1)
    }
    console.log(weights)
}--weights.length
