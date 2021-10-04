// In this program we are introducing asynchronous behaviour using setTimeout and we are learning how callback function, promises and async-await handles this situation. If we use callback() to solve the issue of asynchronous functions, we will get into "callback hell", which leads to bad unreadable code.

console.log("Start");

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the user data");
            resolve({ userEmail: email});
        }, 3000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the videos");
            resolve(["video1", "video2", "video3"]);
        }, 10000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the details");
            resolve("title of the " + video);
        }, 2000) 
    })
}

// // Using promises (in series, new promise is resolved only when previous promises are resolved)
// loginUser("Ankit@goomail.com", "pass-word--")
//     .then(user => getUserVideos(user.email))        
//     .then(videos => videoDetails(videos[0]))
//     .then(detail => console.log(detail)); // .then() has access to the return value of it's promise's resolve. Ex: in first case it's object, second case it's array & third case it's a string

console.log("End");


// // Using promises in parallel. Run all the promises in parallel. So the maxm time taking promise is the limiting factor
// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("Getting stuff from youtube");
//         resolve({ videos: [1, 2, 3, 4, 5, 6, 7]})
//     }, 2000);
// });

// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("stuff from youtube");
//         resolve({ user: "Name"})
//     }, 5000);
// });

// Promise.all([yt, fb])
//     .then(result => console.log(result));




// Async-Await
// This is used to write synchronous style code in javascript which is a synchronous single threaded language
async function displayUser() {
    const loggedinUser = await loginUser("Ankit@goomail.com", "pass-word--");
    const videos = await getUserVideos(loggedinUser.email);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}
displayUser();
