// let random = Math.random()
// console.log(random)
// let abs = Math.abs(-3)
// console.log(abs)
const choices = document.querySelectorAll('.choice')
const store = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')

const scoreboard = {
    player: 0,
    computer: 0
}
function play(e){
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice,computerChoice)
    showWinner(winner,computerChoice) 
}
//get computer choice
function getComputerChoice(){
    const rand = Math.random()
    if(rand < 0.34){
        return 'rock';
    }else if(rand <= 0.67){
        return 'paper'; 
    }else{
        return 'scissors';
    }
}
//get winner
function getWinner(p,c){
    if(p===c){
        return 'draw';
    }else if(p === 'roch'){
        if(c==='paper'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if(p==='paper'){
        if(c==='scissors'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if(p==='scissors'){
        if(c==='roch'){
            return 'computer';
        }else{
            return 'player';
        }
    }
}
function showWinner(winner,computerChoice){
    if(winner==='player'){
        //Inc player score
        scoreboard.player++;
        //show modal result
        result.innerHTML =`
        <h1 class="text-win">You Win</h1>
        <i class="modali fa fa-hand-${computerChoice}-o"></i>
        <p>computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
    } else if(winner==='computer'){
        //Inc player score
        scoreboard.computer++;
        //show modal result
        result.innerHTML =`
        <h1 class="text-win">You Lose</h1>
        <i class="modali fa fa-hand-${computerChoice}-o"></i>
        <p>computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
    }else{
        result.innerHTML =`
        <h1 class="text-win">It's Draw</h1>
        <i class="modali fa fa-hand-${computerChoice}-o"></i>
        <p>computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
    }
    scoreboard.innerHTML=`
    <p>Player : ${scoreboard.player}</p>
    <p>Computer : ${scoreboard.computer}</p>`
    modal.style.display='block'
}
//Restart
function restartGame(){
    scoreboard.player=0
    scoreboard.computer=0
    scoreboard.innerHTML=`
    <p>Player : 0</p>
    <p>Computer : 0</p>`
}
//Clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display='none'
    }
}
choices.forEach(function(choice){
    choice.addEventListener('click', play)
})
window.addEventListener('click',clearModal)//khung modal hiển thị r muốn tắt đi thì click đại nó sẽ dc thi hành
restart.addEventListener('click',restartGame)
