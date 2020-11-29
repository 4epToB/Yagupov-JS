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
    textTemp=text.value
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
	author: "Брэм Стокер",
	name: "Дракула",
	desription: "Кусь",
	partNumber: "123456" 
},{
	author: "Уолтер Айзексон",
	name: "Стив Джобс",
	desription: "Телефон без кнопок",
	partNumber: "123457" 
},{
	author: "Уолтер Айзексон",
	name: "Илон Маск",
	desription: "Юра,мы все потеряли",
	partNumber: "123458"
}];

function createTable(bookarr){
    let tableContainer=document.createElement('div')
    document.body.append(tableContainer)
    let tableRow=document.createElement('table')
    tableContainer.appendChild(tableRow)
    console.log(tableRow.children)
    console.log(bookarr[1]) 
    let sortMas=[]                                              // Пытался сделать более гибкий вариант
    for(j=0;j<=bookarr.length;j++){                             //Создал массив, в котором будут только те объекты           
        for(i=0;i<=items.length;i++){                           // которые имеют свойство автор равное запросу. На случай если книг будет больше
            for (let key in items[i]){                          // чем число переданных авторов в функцию createTable. Что-то вроде фильтра
                if(items[i][key]==bookarr[j]){                  // 
                    sortMas.push(items[i])                      // 
                }
            }
        }
    }
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
                let tempTd= document.createElement('td')    //Александр, на сколько проще можно сделать было к примеру 
                tempTd.style.border='1px solid black'       //конкретно мой пример, именно инструментами которыми мы прошли 
                let tempTh= document.createElement('th')    //и которыми надо выполнить именно это дз?
                tempTh.style.border='2px double black'      //Ощущение что я иду очень окольными путями и можно сделать проще
                if (i==0){ tableRow.children[i].append(tempTh)
                    tempTh.innerHTML=label(key)
                }
                tableRow.children[i+1].append(tempTd)
                tempTd.innerHTML=sortMas[i][key]
                
            }
        }
    }  
    
createTable(["Брэм Стокер","Уолтер Айзексон"])