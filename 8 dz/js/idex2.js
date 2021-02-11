/* Реализовать одну страничку HTML о знаменитом человеке с
использованием панели с вкладками (табы). Например, в качестве знаменитого человека возьмём Пушкина А.С., из википедии возьмём наполнение странички, 
в качестве вкладок можно указать: биография, творчество и т.п. Переключение между вкладками страницы и изменение содержимого реализовать с использованием JS. */
let menuOrigins=document.querySelector(".menuOrigins")
let menuChild=document.querySelector(".menuChild")
let menuYouth=document.querySelector(".menuYouth")
let menuYang=document.querySelector(".menuYang")
let оrigins=document.querySelector(".origins")
let child=document.querySelector(".child")
let youth=document.querySelector(".youth")
let yang=document.querySelector(".yang")
menuOrigins.addEventListener("click",showOrigins)
menuChild.addEventListener("click",showChild)
menuYouth.addEventListener("click",showYouth)    
menuYang.addEventListener("click",showYang)
//решелно максимально в лоб,потом сделаю получше)
function showOrigins(){
    оrigins.style.display="block"
    child.style.display="none"
    youth.style.display="none"
    yang.style.display="none"
    menuOrigins.className="active-item"
    menuChild.className="menuChild"
    menuYouth.className="menuYouth"
    menuYang.className="menuYang"
}
function showChild(){
    оrigins.style.display="none"
    child.style.display="block"
    youth.style.display="none"
    yang.style.display="none"
    menuOrigins.className="menuOrigins"
    menuChild.className="active-item"
    menuYouth.className="menuYouth"
    menuYang.className="menuYang"
}
function showYouth(){ 
    оrigins.style.display="none"
    child.style.display="none"
    youth.style.display="block"
    yang.style.display="none"
    menuOrigins.className="menuOrigins"
    menuChild.className="menuChild"
    menuYouth.className="active-item"
    menuYang.className="menuYang"
}
function showYang(){
    оrigins.style.display="none"
    child.style.display="none"
    youth.style.display="none"
    yang.style.display="block"
    menuOrigins.className="menuOrigins"
    menuChild.className="menuChild"
    menuYouth.className="menuYouth"
    menuYang.className="active-item"
}
