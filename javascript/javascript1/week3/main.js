let bookList = ['Homo_Deus', 'Angels_And_Demons', 'AllTheLight_WeCannotSee', 
'TheLost_Symbol', 'Inferno', 'Origin', 'The_DaVinciCode', 'Deception_Point', 'Digital_Fortress', 'Crime_Victim'];

console.log(bookList);

const bookListInfo = [ {
    id: bookList[0],
    title: "Homo_Deus",
    language: "English",
    author: "Yuval Noah Harari",
    pic: "images/homodeus.jpeg" 
},
{
    id: bookList[1],
    title: "Angels And Demons",
    language: "English",
    author: "Dan Brown",
    pic: "images/angels&Demons.jpeg" 
},
{
    id: bookList[2],
    title: "All The Light We Cannot See",
    language: "English",
    author: "Anthony Doerr",
    pic: "images/allthelightwecannotsee.jpeg" 
},
{
    id: bookList[3],
    title: "The Lost Symbol",
    language: "English",
    author: "Dan Brown",
    pic: "images/theLostSymbol.jpeg" 
},
{
    id: bookList[4],
    title: "Inferno",
    language: "English",
    author: "Dan Brown",
    pic: "images/inferno.jpeg" 
},
{
    id: bookList[5],
    title: "Origin",
    language: "English",
    author: "Dan Brown",
    pic: "images/origin.jpeg" 
},
{
    id: bookList[6],
    title: "Da Vinci Code",
    language: "English",
    author: "Dan Brown",
    pic: "images/daVinciCode.jpeg" 
},
{
    id: bookList[7],
    title: "Deception Point",
    language: "English",
    author: "Dan Brown",
    pic: "images/deceptionpoint.jpeg" 
},
{
    id: bookList[8],
    title: "Digital Fortress",
    language: "English",
    author: "Dan Brown",
    pic: "images/digitalFortress.jpeg" 
},
{
    id: bookList[9],
    title: "Crime Victim",
    language: "English",
    author: "Dan Brown",
    pic: "images/crimeVictim.jpeg"
}
];
console.log(bookListInfo);

function addBookInfo(){
    for(let i = 0; i < bookList.length; i++){
        let bookTitle = document.getElementsByClassName("title")[i];
        bookTitle.innerHTML = bookListInfo[i].title;
        let bookAuthor = document.getElementsByClassName("author")[i];
        bookAuthor.innerHTML = bookListInfo[i].author;
        let bookLanguage = document.getElementsByClassName("language")[i];
        bookLanguage.innerHTML = bookListInfo[i].language;
        let bookPic = document.getElementsByClassName("coverphoto")[i];
        bookPic.src = bookListInfo[i].pic ; 
    }

}

addBookInfo();