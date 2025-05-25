const item = document.querySelector('.item')
// console.log(item)
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)



for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover',dragover)
	placeholder.addEventListener('dragenter',dragenter)
	placeholder.addEventListener('dragleave',dragleave)
	placeholder.addEventListener('drop',dragdrop)
}


function dragstart(event){	
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)	
}

function dragend(event) {
	
	// event.target.classList.remove('hold')
	// event.target.classList.remove('hide')
	event.target.className = 'item'
}

function dragover(event) {	
	// console.log('drag over')
	event.preventDefault()
}

function dragenter(event) {
	event.target.classList.add('hovered')
	console.log('drag enter')	
}

function dragleave(event) {
	event.target.classList.remove('hovered')
	console.log('drag leave')	
}

function dragdrop(event) {
	event.target.append(item)
	event.target.classList.remove('hovered')
	console.log('drag drop')	
}