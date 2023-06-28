let currentControl = 0
const form = document.getElementById('form')
const formSteps = document.querySelectorAll('.form-step')
const currentProgressStep = document.querySelectorAll('.step-progress [data-step]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)
  alert(`Obrigado pela sua resposta ${data.get('name')}!`)
})
form.addEventListener('click', (e) => {
  if (!e.target.matches('[data-action]')) {
    return null;
  }

  const actions = {
    prev() {
      currentControl--
    },
    next() {
      if (!isValidInput()) {
        return 
      }
      currentControl++
    }
  }

  const action = e.target.dataset.action
  actions[action]()
  console.log(currentControl);
  updateActiveStep()
  updateProgressStep()
})

function updateActiveStep() {
  formSteps.forEach(step =>step.classList.remove('active'))
  formSteps[currentControl].classList.add('active')
}

function updateProgressStep() {
  currentProgressStep.forEach((step, idx) => {
    step.classList.remove('active')
    step.classList.remove('done')

    if (idx < currentControl + 1) {
      step.classList.add('active')
    }
    
    if (idx < currentControl) {
      step.classList.add('done')
    }
  })
}

// validando os inputs 

function isValidInput() {
  const currentFormStep = formSteps[currentControl]
  const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]

  return formFields.every((input) => input.reportValidity())
}

// criando as animações em css

formSteps.forEach(step => {
  const addHide = () => {
    step.classList.add('hide')
  }

  step.addEventListener('animationend', (event) => {
    addHide();
    console.log(formSteps[currentControl]);
    formSteps[currentControl].classList.remove('hide')
  })
})

