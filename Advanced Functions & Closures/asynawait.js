// const result=()=>{
//   return new Promise((res,rej)=>{
// setTimeout(()=>{
//     res("Hello")
// },1000)
//   })
// }

// const sayHello=async()=>{
//     const res=await result();
//     console.log(res);
// }
// sayHello()

// const result=(a)=>{
//   return new Promise((res,rej)=>{
// if(a===10){
//   res(a)
// }
// else{
//     rej("Error")
// }
//   })
// }

// const getNumber=async()=>{
//     const res=await result(10);
//     console.log(res);
// }
// getNumber()


const doubleNumber=(num)=>{
    return num*2;
}

const addTen=(num)=>{
    return num+10;
}

const processNumber=async()=>{
try{
    const data=doubleNumber(10);
    const finalData=addTen(data);
    console.log(finalData);
}
catch(err){
    console.log(err)
}
}
processNumber()