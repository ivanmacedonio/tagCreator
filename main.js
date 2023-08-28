let tags = []

const inputTagContainer = document.querySelector('#input-tag')
const tagsContainer = document.createElement('div')
const inputTag = document.createElement('span')

inputTag.ariaRoleDescription = 'textbox'
inputTag.contentEditable = 'true' //hace que el span sea modificable, es decir podamos escribir sobre el
inputTag.classList.add('input')
inputTag.focus()
inputTagContainer.classList.add('input-add-container')
tagsContainer.classList.add('tag-container')

inputTagContainer.appendChild(tagsContainer)
tagsContainer.appendChild(inputTag)

inputTagContainer.addEventListener('click', e=> {
    if(e.target.id === '#input-tag' || 
    e.target.classList.contains('tag-container')){
        inputTag.focus()
    }
})

//agregamos el evento si el focus (donde clickeamos) es el div. recordemos 
//que hacemos esto porque no es un input, es un div que agrega spans


inputTag.addEventListener('keydown', (e)=> { //keydown espera que tecla se presiona
    if(e.key === 'Enter' && inputTag.textContent !== ''){
        e.preventDefault()
        if(!existTag(inputTag.textContent)){
            tags.push(inputTag.textContent)//agrega un elemento al arreglo
            inputTag.textContent = ''
            renderTags()
        } }
          else if (
            e.key === 'Backspace' && inputTag.textContent === '' && tags.length > 0){
            tags.pop()
            renderTags()
            
        }
        
    }
)

function renderTags(){
    tagsContainer.innerHTML = ''
    const html = tags.map(tag => {
        const tagElement = document.createElement('div')
        const tagButton = document.createElement('button')

        tagElement.classList.add('tag-item')
        tagButton.textContent = 'X'
        tagButton.addEventListener('click', e => {
            //delete tag
        })
        tagElement.appendChild(document.createTextNode(tag))
        tagElement.appendChild(tagButton)
        return tagElement
    })

    html.forEach(element => {
        tagsContainer.appendChild(element)
    })
    tagsContainer.appendChild(inputTag)
    inputTag.focus()
}
 function existTag(value){
    return tags.includes(value) //retorna true o f si existe el tag
 }

 function removeTag(value){
    tags = tags.filter(tag => tag !== value)
    return renderTags()
 }


