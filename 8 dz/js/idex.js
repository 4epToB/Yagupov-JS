let bigDiv=document.body.children
function green_white(){
    if(this.style.backgroundColor =="white"){
        this.style.backgroundColor ="green"}else{
            this.style.backgroundColor ="white"
        }
} 
bigDiv[0].addEventListener("click", green_white);
bigDiv[1].addEventListener("click", green_white);
//-------------------------------//
let btn = document.querySelector('.btn');
function counter(){
    let i = 1;
	return function(){
        btn.setAttribute("value",i)
        return ++i;
    }
}
btn.addEventListener("click", counter())
//-------------------------------//
let text=document.querySelector(".text")
let input=document.querySelector(".comment")


function addComment(){
    let textTemp=text.value
    let container=document.createElement('div')
    document.body.append(container)
    container.style.display="flex"
    container.style.verticalAlign="center"
    container.style.margin="20px 0px"
    let avatar=document.createElement('img')
    avatar.style.width='50px'
    avatar.style.height='50px'
    avatar.setAttribute("src","img/zombie.png")
    avatar.setAttribute("alt","img/zombie.png")
    container.append(avatar)
    let add=document.createElement('textarea')
    add.style.backgroundColor='lightlue'
    add.style.borderRadius='10px'
    add.style.width='250px'
    add.setAttribute("disabled","disabled")
    container.append(add)
    add.value=textTemp
}
input.addEventListener("click",addComment)
//-------------------------------//
let items = [{
    author: "Уолтер Айзексон",
	name: "Стив Джобс",
	desription: "Телефон без кнопок",
	partNumber: "123458" 
},{
	author: "Брэм Стокер",
	name: "Дракула",
	desription: "Кусь",
	partNumber: "123459" 
},{
	author: "Уолтер Айзексон",
	name: "Илон Маск",
	desription: "Юра,мы все потеряли",
	partNumber: "123457"
}];
let sortMas=[]
let tempTd
let tempTh
let tableRow
function createTable(bookarr){
    let tableContainer=document.createElement('div')
    document.body.append(tableContainer)
    tableRow=document.createElement('table')
    tableContainer.appendChild(tableRow)
    console.log(tableRow.children)
    console.log(bookarr[1]) 
                                                  // Попытался сделать более гибкий вариант.
    for(j=0;j<=bookarr.length;j++){                             //Создал массив, в котором будут только те объекты           
        for(i=0;i<=items.length;i++){                           // которые имеют свойство автор равное запросу. На случай если книг будет больше
            for (let key in items[i]){                          // чем число переданных авторов в функцию createTable. Что-то вроде фильтра
                if(items[i][key]==bookarr[j]){                  // 
                    sortMas.push(items[i])                      // 
                }
            }
        }
    }
    /* partNumberSort= sortMas.sort(function (a, b) {
        return a['partNumber']-b['partNumber']});  */ 
    function label(keyName){                                //Функция возвращает названия поля,по свойству объекта.
        switch (keyName){                                   //Что бы дальше ею заполнять название граф
            case "author":                                  //
                return "Автор"
                break;
            case "name": 
                return "Название книги"
                break;
            case "desription": 
                return "Описание"
                break;
            case "partNumber": 
                return "Артикул"
                break;        
            }                           
}
    for(j=0;j<=sortMas.length;j++){
        tableRow.appendChild(document.createElement('tr'))   //Создал столько строк,сколько объектов в отфильтрованном массиве
        }                                                   //
    
    for(i=0;i<=sortMas.length;i++){                         //Раскиываю значения по строкам,пушу туда td и полняю их сразу
        for (let key in sortMas[i]){                        // в нулевую строку кидаю название столбцов
                tempTd= document.createElement('td')    //Александр, на сколько проще можно сделать было к примеру 
                tempTd.style.border='1px solid black'                                                                                                                    
                if (i==0){ 
                    tempTh= document.createElement('th')    //конкретно мой пример, именно инструментами которыми мы прошли 
                    tempTh.style.border='2px double black'  //и которыми надо выполнить именно это дз?
                    tableRow.children[i].append(tempTh)     //Ощущение что я иду очень окольными путями и можно сделать проще
                    tempTh.innerHTML=label(key)
                }
                tableRow.children[i+1].append(tempTd)
                tempTd.innerHTML=sortMas[i][key]
                
            }
        }
        firstLine=tableRow.children[0]
        firstLine.children[0].addEventListener("click",authorSort)
        firstLine.children[1].addEventListener("click",nameSort)
        firstLine.children[2].addEventListener("click",desriptionSort)
        firstLine.children[3].addEventListener("click",partNumberSort)
        
    }  
    
createTable(["Дракула","Илон Маск","Стив Джобс"])
    
function authorSort(){
    sortAlphavite("author")
    refresh(sortMas)

}
function nameSort(){
    sortAlphavite("name")
    refresh(sortMas)

}
function desriptionSort(){
    sortAlphavite("desription")
    refresh(sortMas)

}
function partNumberSort(){
    sortMas.sort(function (a, b) {
        return a["partNumber"]-b["partNumber"]})
    refresh(sortMas)

}
function sortAlphavite(letter){
    sortMas.sort(function (a, b) {
        let nameA=a[letter].toLowerCase() 
        let nameB=b[letter].toLowerCase()
        if (nameA < nameB) 
            return -1
        if (nameA > nameB)
            return 1
        return 0

    });
    }

 
 function refresh(rMass){
    for(i=0;i<rMass.length;i++){  
        secLine=tableRow.children[i+1] 
        j=0
        while (secLine.children.length-1>=j){
            for (let key in rMass[i]){                            
                secLine.children[j].innerHTML=rMass[i][key]
                j++          
            }
        }
    }
 }