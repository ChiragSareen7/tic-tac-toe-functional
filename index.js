let boxElement = document.querySelectorAll('.box')
let xAttempts=[]
let oAttempts =[]
let wonTheGame=0;

let gameResult=document.getElementById('result')
let message=document.getElementById('message')
let winningcombination=[
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,1,2],
[3,4,5],
[6,7,8],
[2,4,6]
]
// console.log(boxElement)
boxElement.forEach((box)=>{
    box.onclick=handleClick
})

var click=0;

function handleClick(event){
    // console.log(event.target.getAttribute("Id"))
    let i = event.target.getAttribute("Id")
    let p=document.createElement('p')
    p.setAttribute('id','text')
    boxElement[i-1].append(p)
    








if(click%2==0){
    xAttempts.push(i-1)
    p.innerText='x'
result(winningcombination,xAttempts,'x')
}
else{
    oAttempts.push(i-1)
    p.innerText='o'
    result(winningcombination,oAttempts,'o')
}

click++
if(click==9 && wonTheGame==0){
    gameResult.style.visibility="visible";
    message.innerHTML="Its a tie!"
   }
}
function result(winningcombination,attempts,playerName){

    let checker=[];
    let flag=0;
    for(let i=0;i<winningcombination.length;i++){
        if(Array.isArray(winningcombination[i])){
            result(winningcombination[i],attempts,playerName)
        }
        else{
            if(attempts.includes(winningcombination[i])){
                checker.push(true);
                flag++
            }
            else{
                checker.push(false);
            }
        }
    }
   // let flag=0
if(checker.every(check=> check === true)&&flag>2){
    gameResult.style.visibility="visible";
    message.innerHTML ="'" + playerName +"' " + "Won the game!";
    wonTheGame=1;
}
}
// let checker=[]



let btn = document.querySelector("#button")
btn.addEventListener("click", ()=>{
location.href  ="./index.html"
})

