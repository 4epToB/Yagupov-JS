function show(){
    console.log(this , "name")
}
let student={
    name: 'Егор',
    age: 29,
    'Интересы': ['Книги','Кино','Музыка'],
    showname: show,
    shownameWindow: show.bind(window),
    logInfo: 
}

