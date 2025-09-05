function curried(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
console.log(curried(2)(3)(2));


function volume(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}
console.log(volume(2)(3)(2));