// Immediately Invoked Function Expressions (IIFE)
// use to create private scope in javascript

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

