function fetchUsers(){
    const cache={};
    return async function(id){
        if(cache[id]){
            return `Returning cached data for user ${cache[id]}`
        }
        const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
          const data = await response.json();
        cache[id]=data;
        return data;
    }
}

const init=fetchUsers();
const user1=await init(1);
console.log(user1)
