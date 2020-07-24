const select = document.querySelector('select[name=emoji]')
const btn = document.querySelector('button')
const res = document.querySelector('div.res')
let input = document.querySelector('input')

let emoji = ""


function populateEmoji(){
   fetch('emoji.json')
    .then(r => r.json())
    .then(res => {
         for (let it of res) {
             select.innerHTML += `<option>${it}</option>` 
         }
    })
}

populateEmoji()

btn.addEventListener('click', stairs)
select.addEventListener('change', e=>{
    emoji = e.target.value
})

select.addEventListener('click', ()=> res.innerHTML="")

function stairs(){
    res.innerHTML = ""
    let index = input.value
    let space = "&nbsp"

    if(index>0 && index<=50){
        for(let i= 1; i<=index; i++){
            res.innerHTML += `<p>${space.repeat(index-i) + emoji.repeat(i)}</p>`
        }
    } else{
        alert("Quantidade Inválida!")
    }
   

}