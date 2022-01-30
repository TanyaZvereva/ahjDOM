import 'core-js/es/array'



// comment this to pass build
const unusedVariable = 'variable';
let deskArray  = [['','','',''], ['','','',''], ['','','',''], ['','','','']];

// for demonstration purpose only
export default function demo(value) {
  return value;
}
function randomGoblin() {
  const randomLine = Math.floor(Math.random()*4)
  const randomCell = Math.floor(Math.random()*4)
  deskArray[randomLine][randomCell] = 'goblin'
}

export function renderDesk() {
 const body = document.querySelector('body')
 body.innerHTML = ''
 deskArray = [['','','',''], ['','','',''], ['','','',''], ['','','','']]
 randomGoblin()
 deskArray.forEach((deskRow)=>{
 const div = document.createElement('div')
 deskRow.forEach((cell)=>{
 const span = document.createElement('span')
 if(cell === 'goblin') {
   span.setAttribute('class','goblin')
 }
 
 div.append(span)
 })
 body.append(div)
 })
}
export function renderIntervalDesk(interval){
  setInterval(()=>renderDesk(), interval)
}
