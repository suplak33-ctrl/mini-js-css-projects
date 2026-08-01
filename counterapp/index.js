const counter = document.getElementById('counter')
const incrementBtn = document.getElementById('incrementBtn')
const decrementBtn = document.getElementById('decrementBtn')
const resetBtn = document.getElementById('resetBtn')


let count = 0; 
//update count 

function updateCounter (){
  counter.textContent = count

}
//increment count
incrementBtn.addEventListener('click',() => {
  count++;
  updateCounter()
})

// decrement count
decrementBtn.addEventListener('click',() => {
  count--;
  updateCounter()
})
//reset 
resetBtn.addEventListener('click',() => {
  count = 0;
  updateCounter()
})



