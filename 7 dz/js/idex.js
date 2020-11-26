let htmlobj=document.body;
console.log(htmlobj)
let html_1=htmlobj.children;
console.log(html_1)
let divTime=document.createElement("div")
let p=document.createElement("p")
p.innerHTML = 'Точное время '
divTime.appendChild(p)
console.log(divTime)
p.style.backgroundColor = "grey"
html_1[0].appendChild(divTime)
let hours = document.createElement("span")
let min = document.createElement("span")
let sec = document.createElement("span")
p.appendChild(hours)
p.appendChild(min)
p.appendChild(sec)
hours.style.color='blue'
min.style.color='green'
sec.style.color='red'
function dateLog(){
    let date = new Date()
    let currHour=date.getHours()
    if(currHour<10){
        currHour="0"+currHour}    
    hours.innerHTML=currHour
    let currMin=date.getMinutes()
    if(currMin<10){
        currMin="0"+currMin} 
    min.innerHTML=":"+currMin
    let currSec=date.getSeconds()
    if(currSec<10){
        currSec="0"+currSec}
    sec.innerHTML=":"+currSec
}
setInterval(dateLog,1000)

//------------------------------------------------------------------------//
let items = [{
	artist: "Eminem",
	album: "The Marshall Mathers LP 2",
	releaseDate: "03.02.2014",
	img: "../7 dz/img/2.jpg"
},{
	artist: "Gorillaz",
	album: "Demon Days",
	releaseDate: "11.05.2005",
	img: "../7 dz/img/5.jpg"
},{
	artist: "Prodigy",
	album: "The fat of the land",
	releaseDate: "30.07.1997",
	img: "../7 dz/img/6.jpg"
}];

function placeItems(array){
    let container=document.createElement("div")
    document.body.append(container)
    container.style.display='flex'
    container.style.justifyContent='space-between'
    container.style.width='100%'
    container.style.flexWrap='wrap'
    
    for(let i=0;i<=array.length-1;i++){
        let artistDiv=document.createElement("div")
        let albumDiv=document.createElement("div")
        let releaseDateDiv=document.createElement("div")
        let imgDiv=document.createElement("div")
        container.append(document.createElement("div"))           
        container.children[i].append(artistDiv,albumDiv,releaseDateDiv,imgDiv)
        let imgPaste=document.createElement("img")
        imgDiv.append(imgPaste)
        imgPaste.style.width='150px'
        imgPaste.setAttribute("src",items[i].img)
        artistDiv.innerHTML="Artist: "+items[i].artist
        albumDiv.innerHTML="Album name: "+items[i].album
        releaseDateDiv.innerHTML="Release Date: "+items[i].releaseDate
    }
    console.log(container)
    
}
placeItems(items)
//------------------------------------------------------------------------//
let trafficLight=document.createElement("div")
document.body.append(trafficLight)
trafficLight.style.width='250px'
trafficLight.style.height='800px'
trafficLight.style.margin='auto'
trafficLight.style.display='flex'
trafficLight.style.flexDirection='column'
trafficLight.style.justifyContent='space-around'
trafficLight.style.backgroundColor='grey'
trafficLight.style.borderRadius='30px'

for(let i=0;i<=2;i++){
    bgDiv=document.createElement("div")
    trafficLight.append(bgDiv) 
    bgDiv.style.width='180px'
    bgDiv.style.height='180px'
    bgDiv.style.margin='auto'
    bgDiv.style.backgroundColor='black'
    bgDiv.style.borderRadius='90px'
}
let colorDiv=document.createElement("div")
colorDiv.style.width='180px'
colorDiv.style.height='180px'
colorDiv.style.margin='auto'
colorDiv.style.borderRadius='90px'
colorDiv.style.backgroundColor='red'

function changecolor(){
    let i=0;
	function recolor(){
            switch(i){
                case 0:
                    trafficLight.children[0].append(colorDiv)
                    colorDiv.style.backgroundColor='red'
                    break; 
                case 1:
                    trafficLight.children[1].append(colorDiv)
                    colorDiv.style.backgroundColor='yellow'
                    break;
                case 2:
                    trafficLight.children[2].append(colorDiv)
                    colorDiv.style.backgroundColor='green'
                    break;
                case 3:
                    trafficLight.children[1].append(colorDiv)
                    colorDiv.style.backgroundColor='yellow'
                    break;
                case 3:
                    break;           
            }i++
            if (i==4){i=0}
        }
    
    setInterval(recolor, 1000);
}
changecolor()
//------------------------------------------------------------------------//
let currDate = new Date()
let nYear=new Date(2021, 0, 1, 0, 0, 0, 0)
let ostMlsec=nYear-currDate
console.log(ostMlsec)
let days=Math.floor(Math.floor(ostMlsec/3600000)/24)
console.log(days)
let mins=Math.floor(((ostMlsec/3600000)-Math.floor(ostMlsec/3600000) )*60)
console.log(mins)
let hrs=Math.floor((((ostMlsec/3600000)/24)-days)*24)
console.log(hrs)
function timeToCelebrate () {
    let dateDiv=document.createElement("div")
    document.body.append(dateDiv)
    dateDiv.innerHTML=`До Нового Года осталось: ${days} ${word(days,"день")} , ${hrs} ${word(hrs,"час")}, ${mins} ${word(mins,"минута")}.`
}
timeToCelebrate()

function word (number,timeItem){
    let numArray=[1,21,31,41,51]
    let numArray1=[2,3,4,22,23,24,32,33,34,42,43,44,52,53,54]
    if (timeItem == "день") {
        if (numArray.includes(number)){
             return "день"
        }else if (numArray1.includes(number)){ 
            return "дня"
        }else if ((!numArray.includes(number)) && (!numArray1.includes(number))){ return "дней"}
    } else if(timeItem == "час") {
        if (numArray.includes(number)){
             return "час"
        }else if (numArray1.includes(number)){ 
            return "часа"
        }else if ((!numArray.includes(number)) && (!numArray1.includes(number))){ return "часов"}
    }else if(timeItem == "минута") {
        if (numArray.includes(number)){
             return "минута"
        }else if (numArray1.includes(number)){ 
            return "минуты"
        }else if ((!numArray.includes(number)) && (!numArray1.includes(number))){ return "минут"}
    }
}