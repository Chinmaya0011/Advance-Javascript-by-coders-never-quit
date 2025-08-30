// const createCounter=()=>{

//     let count=0;

//     return {
//         increment(){
           
//             return ++count;
//         },
//         decrement(){
         
//             return --count;
//         }
//     }
// }
// const counter=createCounter();
// console.log(counter.increment())
// console.log(counter.increment())

const chinmaya=()=>{
    let age=12;

return{
    getAge:()=>{
        return age;
    },
    setAge:(newAge)=>{
      age=newAge;
    }
}
}
const result=chinmaya();
console.log(result.getAge());
result.setAge(20);
console.log(result.getAge());