function compute() {
    let v = document.getElementById("x").value; // get form's value
    let x = parseInt(v); // convert value to int
    if(x >= 1 && x <= 100) {
        let y = fibonacciRecursive(x);
        document.getElementById("numberX").innerText = x;
        document.getElementById("answerY").innerText = y;
    }
}

function fibonacciRecursive(x) {
    if (x == 1){
        return 1;
    }
    else if (x == 2){
    return 1;
    }
    else{
        return fibonacciRecursive(x-1) + fibonacciRecursive(x-2);
    }
}
function fibonacciIterative(x) {
    let a = 0;
    let b = 1;
    for(let i = 0; i < x; i++){
        let c = a;
        a = b;
        b = b + c;
    }
    return a;
}