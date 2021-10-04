let posts = [
    {title: "Harry", author: "JK"}, {title: "Carry", author: "KJ"}
];

function getPosts (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            })
            document.body.innerHTML = output;
            resolve();
        }, 1000);
    })
    
}

function createPost(post) {
    updateLastUserActivityTimeVar = updateLastUserActivityTime();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error){
                resolve();
            }else {
                reject("Error : Something went wrong");
            }
        }, 2000);
    })
    
    
};



// Delete Post in few seconds
function deletePostPromise() {
    return new Promise((resolve, reject) => {
        let elem  = document.getElementsByTagName('li');
        var timeId =  setInterval(() => {

            if (elem.length > 0) {
                posts.pop();
                // getPosts();
                clearInterval(timeId);
                resolve();
            }
        }, 1000);

        if (elem.length == 0){
            reject("Array is empty!");
        }
    });
}


// updateLastUserActivityTime function
var updateLastUserActivityTimeVar;
function updateLastUserActivityTime (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
} 







var createPostVar = createPost({title: "Larry", author: "LK"})
    .then(getPosts)
    .catch(err => console.log(err));





// let elem  = document.getElementsByTagName('li');
// var checkElemSize = setInterval(() => {
//     if (elem.length > 0){
//         var delePost1Sec = setInterval(() => {
//             deletePostPromise()
//                 .then(getPosts())
//                 .catch(err => console.log(err));
//             if (elem.length == 0) clearInterval(delePost1Sec);
//         }, 2000)                        // if getPosts delay and this delay is same, then elements willbe deleted at the same time. To avoid that we can use setTimout in deletePost()
//         clearInterval(checkElemSize);        
//     }
// }, 0);



// Promise all

// // Practice with tutorial
// function promise1 (){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 8000, "Hello World!");
//     })
// } 
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "GoodBye!");
// })
// const prom1 = promise1();
// Promise.all([prom1, promise2, promise3]).then((values) => {
//     console.log(values);
// });




// Console log the user data 
Promise.all([ deletePostPromiseVa ]).then(() => console.log(posts));     // function call value should be passed as elements of array




// Delete a post of user
var deletePostPromiseVa;
let elem  = document.getElementsByTagName('li');
var checkElemSize = setInterval(() => {
    if (elem.length > 0){
        deletePostPromiseVar = deletePostPromise()
                .then(getPosts)
                .catch(err => console.log(err));               
        clearInterval(checkElemSize);        
    }
}, 0);


