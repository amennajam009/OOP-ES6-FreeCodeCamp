// EXPLANINATION 1 // Aggregation is a special form of association relationship where an object has a major role
//than the other one. Usually, this major role determines a sort of ownership of an object in
//relation to the other. The owner object is often called aggregate and the owned object is
//called component. However, each object has an independent life.

var company = {
    name: "ACME Inc.",
    employees: []
   };
   var johnSmith = new Person("John", "Smith");
   var marioRossi = new Person("Mario", "Rossi");
   company.employees.push(johnSmith);
   company.employees.push(marioRossi);
   













// EXPLANINATION 2 //(Aggregation): Let's think about Lego when we make something with LEGO so we join the small pieces of LEGO together
//and make something with it like House etc which means that by joining different block we can make anything 
// that's the same thing in aggregation we join different object to make a different object 

class Song{
    constructor(song,singer){
        this.song=song,
        this.singer=singer
    }
}

class PlayList{
    constructor(){
        this.songs=[]
    }

    addsong(song){
        this.songs.push(song)
    }
}

const myPLaylist = new PlayList();
const song1= new Song("Shape of You", "Ed Sheeran");
const song2 = new Song("Believer", "Imagine Dragons");

myPLaylist.addsong(song1)
myPLaylist.addsong(song2)
console.log(myPLaylist.songs)

