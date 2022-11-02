console.log('callbacks!')

/*
    JavaScript Callbacks
*/

function filter(anArr){
    let output = []
    for (let element of anArr){
        if (element % 2 === 0){ // Logic that determines if filtered
            output.push(element);
        };
    };
    return output;
};

let numbers = [5, 10, 20, 30, 35, 40, 45, 50];

console.log(filter(numbers))


// Create a function to filter out based on any true condition from a function

function filterWithCallback(anArr, callbackFn){
    let output = []
    for (let element of anArr){
        if (callbackFn(element) % 2 === 0){ // Logic that determines if filtered
            output.push(element);
        };
    };
    return output;
}

function isOdd(num){
    return num % 2 === 1;
}

console.log(filterWithCallback(numbers, isOdd));

console.log(filterWithCallback(numbers, num => num >= 20));

console.clear();


// Async Example
function first(){
    setTimeout(() => {
    console.log('First');
    }, 3000);
};

function second(){
    console.log('Second');
};

// first();
// second();


// Real-ish life example

// Create a function that will take in a song name, download a song, and then play the song

// function downloadSong(songName){
//     console.log(`Downloading ${songName}...`)
//     setTimeout(() => {
//         console.log('Finished Downloading')
//         return songName
//         return {title: songName, artist: 'Chief Keef'}
//     }, 3000)
// }

// function playSong(songName){
//     let song = downloadSong(songName);
//     console.log(`${song} is playing...`)
//     // console.log(`${song.title} by ${song.artist} is playing...`)
// }

// playSong('Love Sosa')


// Fix the issue with Callbacks


function downloadSong(songName, callback){
    console.log(`Downloading ${songName}...`)
    setTimeout(() => {
        console.log('Finished Downloading')
        callback(songName)
        // return {title: songName, artist: 'Chief Keef'}
    }, 3000)
}

function playSong(song){
    console.log(`${song} is playing...`)
}

downloadSong('Love Sosa', playSong);


// Send it to a friend
downloadSong("Dont Like", (song) => console.log(`Sending ${song} to a friend...`));



// Handling Errors

// function downloadSong2(songName, callback){
//     console.log(`Searching for ${songName} in our database....`);
//     setTimeout(() => {
//         // Simulate a valid song choice
//         let song;
//         if (songName.length > 4){
//             song = {
//                 title: songName,
//                 artist: 'Pitbull',
//                 duration: '3:25'
//             }
//         } else {
//             song = {};
//         }
//         callback(song)
//     }, 3000);
// };

// let songChoice = 'Mr. Worldwide';

// downloadSong2(songChoice, s => console.log(`${s.title} by ${s.artist} is playing...`))



function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Searching for ${songName} in our database....`);
    setTimeout(() => {
        // Simulate a valid song choice
        let song;
        if (songName.length > 4){
            song = {
                title: songName,
                artist: 'Pitbull',
                duration: '3:25'
            }
            callbackSuccess(songName);
        } else {
            callbackFail(songName);
        }
        callback(song)
    }, 3000);
};

let songChoice = 'ABC';

downloadSong2(songChoice, 
    s => console.log(`${s.title} by ${s.artist} is playing for the next ${s.duration}`),
    s => console.log(`${s} is not a valid song choice`)
);
