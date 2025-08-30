const memoziation=()=>{
    const cache={};

    return function(num){
        if(num in cache){
                  console.log("Fetching from cache...");

            return cache[num];
        }
        else{
                console.log("Calculating...");
            let result=num+5;
            cache[num]=result
            return result;
        }
    }
}
const result=memoziation();
console.log(result(12))
console.log(result(12))