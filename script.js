
let foundArray = []
let state = 0;
let count = 0;
let winnerFound = false;
let winning_combos = [
    ['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']
]
let X = []
let O = []




handlevent = (event) => {
    count++
    const clickedDiv = event.target;
    clickedDiv.classList.remove('clickable-div');
    clickedDiv.style.opacity = 0.7;

    if(state==0){
        clickedDiv.innerHTML = "<p style='color: darkblue'>X<p>"
      
        X.unshift(clickedDiv.id)
        X.sort();
       
        let found = winning_combos.some(arr => {
       // Log the current array for debugging
            if (arr.every(value => X.includes(value))) {
                foundArray = arr; // Store the found array
                return true; // Return true to break out of the loop
            }
            return false; // Return false if not found
        });

        if(found){
            
            document.querySelector('.text').innerHTML = "<p style='color: darkblue';font-size: 6vh><b>Player 1 Wins!!!!!<b></p>"
            winnerFound = true;
            foundArray.forEach(element => {
                
                document.getElementById(`${element}`).style.backgroundColor = 'aquamarine';
            });
            alert("Congrats! Player 1 Won")
            document.querySelectorAll('.clickable-div').forEach(div => {
                console.log("Lol");
                div.removeEventListener('click', handlevent);
            });
           

        }
        state = 1;

        if((count==9&&winnerFound==false)){
            document.querySelector('.text').innerHTML = "<p style='color: green;font-size: 6vh'><b>This game is a draw<b></p>"
            alert("Draw Game")
        }else if(winnerFound==false){
        document.querySelector('.text').innerHTML = "<p style='color: red'>Player 2's Turn..</p>"
        }


        
    }
    else{
        clickedDiv.innerHTML = "<p style='color: red'>O<p>"
        
        document.querySelector('.text').innerHTML = "<p style='color: darkblue';font-size: 6vh>Player 1's Turn..</p>"
        
        clickedDiv.classList.remove('.clickable-div')
        O.unshift(clickedDiv.id)
        O.sort();
    
        let found = winning_combos.some(arr => {
            
            if (arr.every(value => O.includes(value))) {
                foundArray = arr; // Store the found array
                return true; // Return true to break out of the loop
            }
            return false; // Return false if not found
        });
          if(found){
            alert("Congrats! Player 2 Won")
        
            document.querySelector('.text').innerHTML = "<p style='color: red;font-size: 6vh'><b>Player 2 Wins<b></p>"
            foundArray.forEach(element => {
          
                document.getElementById(`${element}`).style.backgroundColor = 'aquamarine'
            });
            document.querySelectorAll('.clickable-div').forEach(div => {
                console.log("Lol");
                div.removeEventListener('click', handlevent);
            });
            winnerFound = true;
        }
        state = 0;
    }
    
    
    clickedDiv.removeEventListener('click', handlevent)
}

document.querySelectorAll('.clickable-div').forEach(div => {
  
    console.log("How??");
    div.addEventListener('click', handlevent);
   
});





function start(){
    document.querySelector('.board').style.display = 'block';
    document.querySelector('#start').style.display = 'none';
    document.querySelector('#re-start').style.display = 'block';
    document.querySelector('.text').innerHTML = "<p style='color: darkblue'>Player 1's turn..</p>"
}
function reset(){
    location.reload();
}