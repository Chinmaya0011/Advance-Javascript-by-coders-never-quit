// // CommonJS version
// const fs = require("fs/promises");

// const readfile = async () => {
//   try {
//     const read = await fs.readFile("test.md", "utf-8");
//     console.log(read);
//   } catch (err) {
//     console.log(err);
//   }
// };

// readfile();

// app.get("/",async(req,res)=>{
// try{
// const result=db.collection("user").find({}).toArray();
// res.send(result);
// }
// catch(err){
// res.send(err)
// }
// })


// const getWeather=async(city)=>{
//     try{
// const fetch=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR`);
// const result= await fetch.json();
// }
// catch(err){
// console.log(err);
// }

// }
// getWeather("delhi")


const doubleNumber=(num)=>{
return setTimeout(()=>{
    return num*2;
},1000);
}

console.log(doubleNumber(5))