const spanTime = document.querySelector('span.s')
const buttonStart = document.querySelector('header button.start')

let startTime = 0.00
let interval


const startStoper = () => {
	spanTime.textContent = startTime
	goTime = startTime += 0.01
	spanTime.textContent = startTime.toFixed(2)

}

const start = () => {
	interval = setInterval(startStoper, 10)

	buttonStart.classList.remove('start')
	buttonStart.classList.add('stop')
	buttonStart.textContent = 'Pauza'

}


const stop = () => {

	buttonStart.classList.remove('stop')
	buttonStart.classList.add('start')
	buttonStart.textContent = 'Start'
	clearInterval(interval)

}


buttonStart.addEventListener('click', () => buttonStart.className === 'start' ? start() : stop())



