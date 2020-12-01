let testArray=[4,3,6,1,5,2,3,]

console.log(Lib.min(testArray))
console.log(Lib.max(testArray))
console.log(Lib.mid(testArray))
console.log(Lib.clone(testArray))
//------//
let x=[]
let y=[]
let trace1 = {
    x: [],
    y: [], 
    type: 'scatter'
  };

for (i=-5;i<=5;i+=0.01){
    trace1.x.push(i)
    trace1.y.push(i*i-4*i)
    if (i>=1){trace1.y.push(5/i)}
}
Plotly.newPlot('myDiv',[trace1]); 

//------//
function random(min,max){
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

let tableContainer
let table
let tr
let input
let chanceCount
var n=3
let winNum=Math.floor((n*n)/6) // количество призов
let deltemp=[]
let temp=[]
let k=0
chanceCount = n*n;
for (i=0;i<chanceCount;i++){
  temp[i]=k
  k++ 
}
console.log(temp)


function createTable(n){
  tableContainer=document.createElement('div')
  table=document.createElement('table')
  for(i=0;i<n;i++){      
    tr=document.createElement('tr')
    table.append(tr)  
      for(j=0;j<n;j++){
        input=document.createElement('input') 
        input.setAttribute("class","btn")        
        input.setAttribute("type","button")    
        input.setAttribute("value","Открой")
        input.style.width ="70px";
        tr.append(input)
            
      }
  }
}

createTable(n)
document.body.append(tableContainer)
tableContainer.append(table)
let chanceCounter=document.createElement('p')
document.body.append(chanceCounter)
allBtn=document.querySelectorAll(".btn")
chanceCounter.innerHTML=`Осталось попыток:${chanceCount}`
for(i=0;i<allBtn.length;i++){
    allBtn[i].addEventListener('click', counter);
}/// повесил слушателей на каждый,т.к. когда вешал слушателя на родителя через 'e', не получилось избавиться от срабатывания клика между ячейками+
// не понял как удалить слушателя с нажатой кнопки при таком подходе.

function counter(){
    --chanceCount;
    chanceCounter.innerHTML=`Осталось попыток:${chanceCount}`
    this.removeEventListener('click', counter);
    this.style.backgroundColor ="green";   
    num=random(0,temp.length)           
    t=temp.splice(num-1,1)[0]   
    deltemp.push(t)
    if (t<winNum) {return this.setAttribute("value","Ура!")}        
    else{{return this.setAttribute("value","еще раз!")}
      
    }  
}


