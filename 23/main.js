const colorPreview = document.querySelector('.preview')

const colorSelectorInput = document.getElementById('input-hue')
const brightnessSelectorInput = document.getElementById('input-brightness')
const contrastSelectorInput = document.getElementById('input-contrast')

colorSelectorInput.addEventListener("input", () => {
  const hue = colorSelectorInput.value || this.value
  const color = `hsl(${hue}, 100%, 50%)`
  const boxshadow = `0px 0px 53px 13px ${color}`

  colorPreview.style.backgroundColor = color
  colorPreview.style.boxShadow = boxshadow
})

brightnessSelectorInput.addEventListener("input", () => {
  const brightness = brightnessSelectorInput.value || this.value
  const Filter = `brightness(${brightness}%) `

  colorPreview.style.filter = Filter
})

contrastSelectorInput.addEventListener("input", () => {
  const contrast = contrastSelectorInput.value || this.value
  const Filter = `contrast(${contrast}%) `

  colorPreview.style.filter = Filter
})