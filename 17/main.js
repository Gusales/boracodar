const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]

const date = new Date()

function renderMonths() {
  const nowMonth = months[date.getMonth()]
  let output = ''
  for (let month of months) {
    const active = nowMonth == month ? 'selected' : ''
    output += `<div class="month-box ${active}">${month}</div>`
  }
  return output
}
const monthContainer = document.getElementById('month-selector')
monthContainer.innerHTML = renderMonths()

document.getElementById('header-year').innerHTML = date.getFullYear()
