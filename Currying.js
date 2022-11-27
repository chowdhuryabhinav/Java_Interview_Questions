
function curry(func) {

    return function curried(...args) {
        if(args.length >= func.length){
            func(...args);
        } else {
            return function(...args2){
                var newArgs = args.concat(args2)
                return curried(...newArgs)
            }
        }
    }

}


function sum(a,b,c) {
    return a+b+c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1,2,3));