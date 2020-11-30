let testArray=[4,3,6,1,5,2,3,]

console.log(Lib.min(testArray))
console.log(Lib.max(testArray))
console.log(Lib.mid(testArray))
console.log(Lib.clone(testArray))
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




