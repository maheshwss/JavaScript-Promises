let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({name: 'User Left', message: ':('});
        } else if (userWatchingCatMeme) {
            reject({name: 'User watching cat meme', message: 'WebDevSimplified < Cat'});
        } else {
            resolve('Thumbs up and Subscribe');
        }
    });
}

watchTutorialPromise().then(message => {
    console.log('Success: ' + message);
}).catch(error => {
    console.log(error.name + ' ' + error.message);
});

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});

Promise.all([
    recordVideoOne, 
    recordVideoTwo, 
    recordVideoThree
]).then(message => console.log(message));

Promise.race([
    recordVideoOne, 
    recordVideoTwo, 
    recordVideoThree
]).then(message => console.log(message));