const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
const backdrop = document.querySelector('#backdrop')
const progress = document.querySelector('#progress')

content.addEventListener('click', openCard)
backdrop.addEventListener('click', closeModal)

const technologies = [
    {title: 'HTML', description: 'HTML Text', type: 'html', done: true},
    {title: 'CSS', description: 'CSS Text', type: 'css', done: true},
    {title: 'JavaScript', description: 'JavaScript Text', type: 'js', done: false},
    {title: 'Git', description: 'Git Text', type: 'git', done: false},
    {title: 'React', description: 'React Text', type: 'react', done: false}, 
]



function openCard () {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
}

function init() {
  renderCards()
  renderProgress()
}

function renderCards () {
      if (technologies.length === 0) {
    content.innerHTML = '<p class="empty">Технологий пока нет. Добавьте первую</p>'
    }else {
        let html = ''
        for (let i = 0; i < technologies.length; i++) {
            const tech = technologies[i]
            html += toCard(tech)
        }
        content.innerHTML = html
    }
}

function renderProgress() {
    const percent = computeProgressPercent()
    

    let background

    if (percent <= 30) {
        background = '#E75A5A'
    }else if (percent > 30 && percent < 70) {
        background = '#F99415'
    }else {
        background = '#73BA3C'
    }

    //background-color -> progress.style.backgroundColor
    //margin-top -> progress.style.marginTop

    progress.style.background = background
    progress.style.width = percent + '%'
    progress.textContent = percent ? percent + '%' : ''
}


function computeProgressPercent() {
    // x-= -> 100%
    // 2 -> 5
    // x = (100 * 2) / 5

    if (technologies.length === 0) {
        return 0
    }

    let doneCount = 0
    for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].done) doneCount++
    }

    return Math.round((100 * doneCount) / technologies.length)
}

function toCard(tech) {
    const doneClass = tech.done ? 'done' : ''
    return `
         <div class="card ${doneClass}">
            <h3>${tech.title}</h3>
         </div>
    `
}

init()
