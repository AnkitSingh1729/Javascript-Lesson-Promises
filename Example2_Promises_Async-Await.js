// This example contains a scene of cinema hall queue. 
// People are showing their tickets at ticket counter to enter in the hall.
// Note : Run one part at a time





////--------------------Using promises(Part 1)-------------------------///////

console.log('person1: shows ticket');
console.log('person2: shows ticket');

// An identifier assigned a promise. NO return of promise
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});
// An identifier receives return value of promise
// The callback function executes when previous promise i.e. promiseWifeBringingTicks is resolved 
const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});
// An identifier receives return value of promise
// The callback function executes when previous promise i.e. getPopcorn is resolved 
const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`));
})

const getColdDrink = getButter.then((t) => {
    console.log('husband: i got butter on the popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need coldDrink now');
    return new Promise((resolve, reject) => resolve(`${t} cold-drink`));
})

// An identifier receives return value of promise
// The callback function executes when previous promise i.e. getButter is resolved 
getColdDrink.then((t) => console.log(t));

// Javascript is synchronous single threaded language.
// Time, tide and javascript waits for none.
// Therefore person4 and person5 will show their tickets until person3's promises are resolved.
console.log('person4: shows ticket');
console.log('person5: shows ticket');








////--------------------Using Async-Await(Part 2)-------------------------///////

// Using Async-Await to write synchronous style code to obtain the same functionality as before.
// We use await if we want next commands to wait until current command gets executed completely. Ex: await setTimeout(() => console.log(1),  1000)
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    })

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrink = new Promise((resolve, reject) => resolve(`cold drink`));
    
    let ticket = await promiseWifeBringingTicks;
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: Yes, get me a cold Drink too');

    let coldDrink = await getColdDrink;
    console.log(`husband: i got some ${coldDrink}`);
    console.log('husband: anything else darling?');
    console.log('wife: Lets go we are getting late');
    console.log(`husband: thank you for the reminder *grins*`);


    return ticket;
};
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');










////--------------------Using Async-Await-Promise.all(Part 3)-------------------------///////

// We use Promise.all if we need tasks to happen parallely, so the task with maxm time is the limiting factor
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    // Promises
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    })
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getCandy = new Promise((resolve, reject) => resolve(`candy`));
    const getColdDrink = new Promise((resolve, reject) => resolve(`cold drink`));
    
    // Awaits
    const ticket = await promiseWifeBringingTicks;
    let [popcorn, candy, colddrink] = await Promise.all([getPopcorn, getCandy, getColdDrink]);
    
    console.log(`${popcorn}, ${candy}, ${colddrink} `)

    return ticket;
};
// async functions by default return promise
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');







