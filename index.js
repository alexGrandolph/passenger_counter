let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
}
function decrease() {
  count -= 1
  if (count < 0) {
    count = 0
  }
  countEl.innerText = count
}



let saveEl = document.getElementById("save-el")
function save() {
  let saves = count + ', '
  
  saveEl.textContent += saves
  countEl.textContent = 0
  count = 0
}
