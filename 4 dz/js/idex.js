/* Дана строка, изображающая целое число. Вывести сумму цифр этого числа. */
let c=559101;
let f=(c+"").split('')
let sum=0
for (i=0;i<=f.length-1;i++){
    f[i]=parseInt(f[i])  
    sum=sum+f[i]
} 
console.log(sum)
/* Дана строка и символ. Удвоить каждое вхождение заданного символа в строку. */
let d="Привет как дела?";
let t=d.split('')
let symb='е'
for (j=0;j<=t.length-1;j++){
   if(t[j]==symb){
       t.splice(j,0,symb)
       j++
   }
} 

console.log(t.join(''))