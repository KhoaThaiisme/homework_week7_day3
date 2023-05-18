const toDoThing = document.querySelector('#todo-form')
const thingsToDo = document.querySelector('.list')

toDoThing.addEventListener('submit', (event) => {
    event.preventDefault()
    const toDoThing = getToDoData()
    const desc = getToDoDesc()
    handleToDoData(toDoThing, desc)

})



function getToDoData() {
    const toDo = document.querySelector('#todo').value
    console.log(toDo)
    return toDo
}
function getToDoDesc() {
    const description = document.getElementById('desc').value
    console.log(description)
    return description
}

function handleToDoData(thing, thing2) {
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const p =document.createElement('p')
    for(let i = 0; i < li.length; i++){
        li.id = `toDo-${i+1}`
        console.log(i)
    }
    li.innerText = `${thing}`
    p.innerText = `${thing2}`
    div.appendChild(ul)
    ul.append(li, p)  
    document.querySelector('.list').appendChild(div)
    div.addEventListener('click', () => {
        div.remove()
    })
}