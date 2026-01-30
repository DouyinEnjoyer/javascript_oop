import { muvelet, muveletLetrehoz } from "./functions.js"


const input = document.createElement('input')
const input2 = document.createElement('input')
document.body.appendChild(input)
document.body.appendChild(input2)
const div = document.createElement('div')
document.body.appendChild(div)
const button = document.createElement('button')
document.body.appendChild(button)
button.innerText = 'button'
 
button.addEventListener('click',function(){
    const szam1 = Number(input.value)
    const szam2 = Number(input2.value)
    const {result} = muvelet(szam1, szam2, muveletLetrehoz("+"))
    div.innerText = result
}) 








const fv = muveletLetrehoz("+")
console.log(fv(1,2))