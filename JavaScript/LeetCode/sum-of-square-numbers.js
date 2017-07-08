var judgeSquareSum = function(c) {
    let set = new Set();

    for(i = 0; i <= c; i++){
        if(check(i)){
           set[i] = false;
        }
    }

    console.log(set);
    return set[i];
}

var check = function(c) {
    for(let i = 0; i * i <= c; i++){
            let b = Math.sqrt(c- Math.pow(i, 2));
            if(typeof b === "number" && b % 1 ===0){
            // slower alternative: if(Number.isInteger((Math.sqrt(c - Math.pow(i, 2))*1))){
                return true;
            }
    }

    return false;
};

judgeSquareSum(99999999)
