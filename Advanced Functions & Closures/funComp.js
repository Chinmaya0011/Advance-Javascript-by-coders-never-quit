const double=(x)=>{
    return x*2;
}
const addThree=(y)=>{
return y+3;
}

const process=(num)=>{
   return addThree(double(num));
}
const first=process;
const second=process;
console.log(first(10))
console.log(first(12))