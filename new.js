let a=function(){
    document.querySelector("h1").innerHTML="This is very very good"
}
let b=setTimeout(a,2000)
document.querySelector('#btn').addEventListener(
    'click',function(){
        clearTimeout(b)
        console.log(yes);
    }
)
let btnStart = document.querySelector("#btn2");
btnStart.addEventListener("click", () => {
    setTimeout(() => {
        document.querySelector("h1").innerHTML = "sam"
    }, 3000)
    console.log("run");
})
