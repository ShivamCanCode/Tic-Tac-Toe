var button = document.querySelectorAll(".box");
var reset = document.querySelector("#resetbtn");
var newbtn = document.querySelector("#newgame");
let h1 = document.querySelector("h1");
var msgContainer = document.querySelector(".msg-container");
var main = document.querySelector("main");
var count = 0;
var turnO = 0;
var turnX = 1;
const winningPatterns = [  [0, 1, 2],
                           [0, 3, 6],
                           [0, 4, 8],
                           [1, 4, 7],
                           [2, 5, 8],
                           [2, 4, 6],
                           [3, 4, 5],
                           [6, 7, 8],]
button.forEach(btn => {
    btn.addEventListener("click",()=>{
            if (turnX == 1) {
                btn.innerText = "X";
                turnX = 0;
                turnO++;
               count++;
                btn.disabled = true;
            }
            else{
                btn.innerText = "O";
                turnO = 0;
                count++;
                turnX++;
                btn.disabled = true;
            }
            checkWinner();   
            count++;
            if(count === 9){
                draw();
            }
        }
    )
});
reset.addEventListener("click",() =>{
    button.forEach(butn => {
        butn.innerText = "";
        butn.disabled = false;
    });
    count = 0;
})
const showWinner = (winner)=>{
   h1.innerText= `Congratulation,The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    newbtn.addEventListener("click",()=>{
        msgContainer.classList.add("hide");
        main.classList.remove("hide");
        button.forEach(butn => {
            butn.innerText = "";
            butn.disabled = false;
        });
    })
    count = 0;
}



const checkWinner = () => {
    for (let pattern of winningPatterns) {
      let pos1Val = button[pattern[0]].innerText;
      let pos2Val = button[pattern[1]].innerText;
      let pos3Val = button[pattern[2]].innerText;
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
        let winner  = pos1Val;
        showWinner(winner);
        
        }
      }
    }
  };
function draw(){
    h1.innerText= `The Game is a Draw`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    count = 0;
    newbtn.addEventListener("click",()=>{
        msgContainer.classList.add("hide");
        main.classList.remove("hide");
        button.forEach(butn => {
            butn.innerText = "";
            butn.disabled = false;
        });
    })
    
}