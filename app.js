// ============== Model ========================= 
const files = [
{
 filename: 'surf_at_lacanau.jpg',
 size: 1024,
 type: 'jpg',
 pixelNumber: 1000,
},
{
 filename: 'documentation_react.docx',
 size: 2024,
 type: 'docx',
 encrypted: true,
},
{
 filename: 'love_yourself.mp3',
 size: 6024,
 type: 'mp3',
 converted: true,
},
{
 filename: 'got.avi',
 size: 10024,
 type: 'avi',
 hd: true,
},
{
 filename: 'party_at_cancun.jpg',
 size: 1424,
 type: 'jpg',
 pixelNumber: 3000,
},
{
 filename: 'my_best_book.pdf',
 size: 3024,
 type: 'pdf',
 encrypted: false,
},
{
 filename: 'my_song.mp3',
 size: 8024,
 type: 'mp3',
 converted: false,
},
{
 filename: 'breaking_bad.mp4',
 size: 8024,
 type: 'mp4',
 hd: false,
},
{
 filename: 'family.png',
 size: 2024,
 type: 'png',
 pixelNumber: 2000,
},
{
 filename: 'documentation_react.docx',
 size: 2024,
 type: 'docx',
 encrypted: true,
},
{
 filename: 'band.mp3',
 size: 2024,
 type: 'mp3',
 converted: true,
},
{
 filename: 'youtube.mp4',
 size: 12024,
 type: 'mp4',
 hd: true

}]



// ============== Constructor ========================= 
function photoFile(filename, size, type, pixelNumber) {
    this.filename = filename;
    this.size = size;
    this.type = "jpg" ;
    this.pixelNumbejpgr = pixelNumber;
}

function videoFile(filename, size, type, hd) {
    this.filename = filename;
    this.size = size;
    this.type = "avi" ;
    this.hd = hd;
}

function songFile(filename, size, type, converted) {
    this.filename = filename;
    this.size = size;
    this.type = "mp3" ;
    this.converted = converted;
}

function textFile(filename, size, type, encrypted) {
    this.filename = filename;
    this.size = size;
    this.type = "docx" ;
    this.encrypted = encrypted;
}

const photo = new photoFile("last_ski_session.jpg",4424, 1, 4000);
const song =  new  songFile("dems.mp3", 7024, 3, false);

files.push(photo);
files.push(song);


// ============== Factory ========================= 

function FileFactory(){
    this.create = (filename, type) => {
        switch(type){
            case:1
            return new photoFile(filename, size, type, pixelNumber)
            break;
            case:2
            return new videoFile(filename, size, type, hd) 
            break;
            case:3
            return new songFile(filename, size, type, converted)
            break;
            case:4
            return new textFile(filename, size, type, encrypted) 
            break;
        }
    }
}

const fileFactory = new FileFactory();


function say(){

    const fileFactory = new FileFactory();
    console.log(files);

    switch (type) {
    case:1
      console.log(this.filename + this.size + this.type + this.pixelNumber);
    break;
    case:2
      console.log(this.filename + this.size + this.type + this.hd);
    break;
    case:3 
      console.log(this.filename + this.size + this.type + this.converted);
    break;
    case:4
      console.log(this.filename + this.size + this.type + this.encrypted);
    break;
    }
}

files.forEach( file => {
    say.call(file);
})


// ============== Observe ========================= 

function Subject (){
    this.fileObservers = []  //array of Observer functions
}
Subject.prototype = {
    subscribe: function(fn)
    {
        this.fileObservers.push(fn)

    },
} 

// ============== Singleton =========================

function file (type){
    this.type = type
} 

const Singleton = (function(){

    function InstanceFile() {
        this.numInstanceFile = 0
    }

    let instanceFile
    let counter = 0

    function createInstanceFile(){
        instanceFile = new InstanceFile()
        return instanceFile
    }

    return{
        getInstanceFile :()=>{
            if(!instanceFile)
                instanceFile = createInstanceFile()
                counter =  counter + 1 
                return instanceFile, counter
        }
    }

})()

const Instancefile = Singleton.getInstanceFile(); 



// ============== View ========================= 
class FilesView {
     renderFiletListModule () { //
        const files = filesApp.getFiles();
    }

    init() {
        this.renderFiletListModule();
    }
}

const filesView = new FilesView();


//================ Controller ================== 
class FilesCtrl {
    constructor(filesView) {
        this.filesView = filesView;
    }

    init() {
        this.filesView.init();
    }

    getFiles() {
        return files;
    }

}

const filesApp = new FilesCtrl(filesView);
filesApp.init();




