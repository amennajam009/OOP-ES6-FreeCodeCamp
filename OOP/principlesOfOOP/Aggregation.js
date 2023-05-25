//(Aggregation): Let's think about Lego when we make something with LEGO so we join the small pieces of LEGO together
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

