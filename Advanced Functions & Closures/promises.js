// const myPromise=new Promise((res,rej)=>{
//     let result=true;
//     setTimeout(()=>{
//         if(result){
//             res("Sucess")
//         }
//         rej("Failed!")
//     },2000)
// })

// myPromise
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// const fetchData=async()=>{
//     // try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/posts');
//         const result=await response.json();
//         return result;
//     // }
// //     catch{
// // console.log(err)
// //     }
// }
// console.log(fetchData())
// async function sayHello() {
//     return "Hello";
// }

// const result = sayHello();
// console.log(result); // Promise { "Hello" }

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data)
}
fetchData()
// async function run() {
//     const result = await fetchData(); // wait for the Promise to resolve
// return result;
// }

// console.log(run())


