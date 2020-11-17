let A = [ 12, 4, 3, 10, 1, 20 ]  
let B = [-3, -7, -100, -33]  
let C=A.concat(B) //let C=B.concat(A)

var area = [ 1, null, 0, null, 1, null, null, null, null ]
let startTable="<table><tbody>";
let endTable="</tbody></table>";
let bodyTable="";
let row="";

for(var i=0;i<area.length;i++){
    if (area[i]==null){area[i]=""}
    row = "<tr style='background-color:grey; height:30px'>"+"<td>"+ area[0]+"</td>"+"<td>"+ area[1]+"</td>"+"<td>"+ area[2]+"</td>"+"</tr>" + "<tr style='background-color:grey; height:30px'>"+"<td>"+ area[3]+"</td>"+"<td>"+ area[4]+"</td>"+"<td>"+ area[5]+"</td>"+"</tr>" + "<tr style='background-color:grey; height:30px'>"+"<td>"+ area[6]+"</td>"+"<td>"+ area[7]+"</td>"+"<td>"+ area[8]+"</td>"+"</tr>"
}
bodyTable+=row
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

let f="112022"
let g=f.split('')
g.forEach(parseint)
for (r=0;r>g.length-1;r++){
    if ((g[0]+g[1]+g[2])==(g[3]+g[4]+g[5])){
        console.log(правда)}
}