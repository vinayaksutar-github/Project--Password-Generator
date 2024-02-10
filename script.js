// console.log("One");
// setTimeout(function(){
//     console.log("Two");
// },2000)
// console.log("Three");


// let One=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//     resolve(
//         {
//             username:"ABC",
//             age:22
//         }
//     )
//     },1000)
// }
// )
// One.then(function(user){
//   console.log(user);
// })



// let One=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//     resolve(   
//        console.log("ONE"), 
//     )
//     },3000)
// }
// )
// One.then(function(){
//   console.log("TWO");
// })


let one=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=false
        if(!error){
    resolve(
        {
          username:'ABC',
          age:22
        }
    )
    }
    else{
        reject("something Went Wrong")
    }
},1000)
}
)
let abc=one.then((user)=>{
    console.log(user);
    return user.username
}
)
.then((username)=>{
    console.log(username);
})
// .then(function(user){
//     console.log(user);
// })
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("Okkk");
}
)


// let two=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let error=true
//         if(!error){
//     resolve(
//         {
//           username:'ABC',
//           age:22
//         }
//     )
//     }
//     else{
//         reject("something Went Wrong")
//     }
// },1000)
// }
// )
// async function newtwo(){
//     let a=await one
//     console.log(a);
// }
// newtwo()