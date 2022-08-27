const myObj = {
    1:{
        albumTitle: 'Square One 0',
        artist: 'BlackPink0',
        track: ['value1','value2','value3'] 
    },
    2:{
        albumTitle: 'Square One 1',
        artist: 'BlackPink1',
        track: ['value1','value2','value3'] 
    },
    3:{
        albumTitle: 'Square One 2',
        artist: 'BlackPink2',
        track: ['value1','value2','value3'] 
    },
}
console.log(myObj);
let yourChoose = prompt(`input something you want work, you need input: C ; R ; U ; D`);

// Function create a Album in Create part
const newAlbum = function(){
        let newId = prompt('Please input Id');
        let newAlbumTitle = prompt('input album');
        let newArtist = prompt('inout Artist');
        let newTrack1 = prompt('input Track 1');
        let newTrack2 = prompt('input Track 2');
        let newTrack3 = prompt('input Track 3');
        myObj[newId]= {
            albumTitle: newAlbumTitle,
            artist: newArtist,
            track: [newTrack1,newTrack2,newTrack3],
        }
}

// Function read according to Property in Read part
const readAccordingToProperty = function(readChoice){
    let readID = prompt(`Choose ${Object.keys(myObj)} or ALL : all `);
    if(readID == 'all'){
        for(const property in myObj ){
            console.log(`ID:${property} --- ${readID}:"${myObj[property][readChoice]}"`);
        }
    }else{
        console.log(`ID:${readID} --- ${myObj[readID][readChoice]}`);
    }
}

// Function delete according to Property in Delete part 
const deleteAccordingToProperty = function(deleteChoose){
    let deleteId = prompt(`Choose Id : ${Object.keys(myObj)}`)
    delete myObj[deleteId][deleteChoose];
} 

switch(yourChoose){
    case 'C':
        newAlbum();
        let againInput = prompt('Do you want continue input? Yes or No');
        while(againInput === 'Yes' || againInput === 'yes'){
            newAlbum();
        }
    break;
    case 'R':
        let readChoice = prompt(`Choose to Read: ${Object.keys(myObj[Object.keys(myObj).length - 1])} or ALL : all or ID: ${Object.keys(myObj)}`);
        switch(readChoice){
            case 'albumTitle':{
                readAccordingToProperty(readChoice);
            }
            break;
            case 'artist':{
                readAccordingToProperty(readChoice);
            }
            break;
            case 'track':{
                readAccordingToProperty(readChoice);
            }
            break;
            case 'all':{
                console.log(myObj); 
            }
            break;
            default:
                console.log(myObj[readChoice]);
            break;
        }
    break;
    case 'U':
        let udtChoose = prompt(`Choose to ID Update : ${Object.keys(myObj)}`);
        let userChoice = prompt(`Choose:${Object.keys(myObj[udtChoose])}`);
        if(userChoice == 'track'){
            let trackChoose = prompt(`Choose track:0,1,2`);
            let udtContent = prompt(`Content update : `);
            myObj[udtChoose][userChoice][trackChoose] = udtContent;
            console.log(myObj[udtChoose]);
        }else{
            let udtContent = prompt(`Content update : `);
            myObj[udtChoose][userChoice] = udtContent;
            console.log(myObj[udtChoose]);
        }
    break;
    case 'D':
        let deleteChoose = prompt(`Choose you want delete : ${Object.keys(myObj[Object.keys(myObj).length -1 ])} or All :all or ${Object.keys(myObj)}`);
        switch(deleteChoose){
            case 'all':
                for(const property in myObj){
                    delete myObj[property];
                }
            break;
            case 'albumTitle':
                deleteAccordingToProperty(deleteChoose);
            break;
            case 'artist':
                deleteAccordingToProperty(deleteChoose);
            break;
            case 'track':
                deleteAccordingToProperty(deleteChoose);
            break;
            default:
                delete myObj[deleteChoose];
            break;
    }
    default:
    break;
}

console.log(myObj);
