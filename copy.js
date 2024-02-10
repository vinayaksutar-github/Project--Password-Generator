
// let two = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error)
//         {
//             resolve({
//                 username:"ABC",
//                 age:22
//             })
//         }
//         else{
//             reject('something went wrong')
//         }    
//     },1000)
// })
// async function newtwo(){
//     try{
//         let a = await two
//         console.log(a);
//     }
//     catch(error){
//          console.log(error);
//     }
  
// }
// newtwo()
async function one(){
    try{
        let a=await fetch('https://jsonplaceholder.typicode.com/users')
        let b=await a.json()
        console.log(b);
    }
    catch(error){
        console.log(error);
    }
}
one()

// in .then
fetch
