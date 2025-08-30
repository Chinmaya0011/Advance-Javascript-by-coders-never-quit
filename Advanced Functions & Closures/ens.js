// function modify(){
//   let balance=12;
//     return (newBal)=>{
//          balance=newBal;
//          return balance;
//     }
// }
// const result=modify();
// console.log(result(112))


// const bank=()=>{
//     let balance=0;

//     return{
//          credit:(bal)=>{
//            balance=bal;
//            return balance;
//         },
//          debit:(bal)=>{
//           balance=bal;
//           return balance;
//         }
//     }
// }

// const bank=()=>{
//     let balance=0;
//     const credit=(bal)=>{
//         balance+=bal;
//         return balance;
//     }
//     const debit=(bal)=>{
//         balance-=bal;
//         return balance;
//     }
//     const get=()=>{
//      return balance;
//     }

//     return[
//         credit,debit,get
//     ]
// }
// const result=bank();
// const[a,b,c]=result;
// console.log(a(100));  // 100
// console.log(b(50));   // 50
// console.log(c());     // 50

