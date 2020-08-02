import './index.css'

const cn = 'jsyesnodialog'

const getDialogComponent = ({
  bodyText = 'Are you sure?',
  labelNo = 'No',
  labelYes = 'Yes'
} = {}) => {
  const container = document.createElement('div')
  container.className = cn
  container.innerHTML = `
    <div class="${cn}__dialog">
      <div class="${cn}__dialog__body">
        ${bodyText}
      </div>
      <div class="${cn}__dialog__footer">
        <button class="${cn}__dialog__button ${cn}__dialog__no">${labelNo}</button>
        <button class="${cn}__dialog__button ${cn}__dialog__yes">${labelYes}</button>
      </div>
    </div>
  `
  return container
}

const closeDialog = () => {
  const dialogComponent = document.querySelector(`.${cn}`)
  dialogComponent.classList.add(`${cn}--closing`)
  setTimeout(() => {
    document.body.removeChild(dialogComponent)
  }, 100)
}

const cleanUp = () => {
  const oldDialog = document.querySelector(`.${cn}`)
  !!oldDialog && oldDialog.parentNode.removeChild(oldDialog)
}

const yesno = (options) =>
  new Promise(resolve => {
    cleanUp()

    const dialogComponent = getDialogComponent(options)
    document.body.appendChild(dialogComponent)
    const noButton = document.querySelector(`.${cn}__dialog__no`)
    const yesButton = document.querySelector(`.${cn}__dialog__yes`)

    noButton.addEventListener('click', () => {
      closeDialog()
      resolve(false)
    })
    yesButton.addEventListener('click', () => {
      closeDialog()
      resolve(true)
    })

  })

window.yesno = yesno

export default yesno