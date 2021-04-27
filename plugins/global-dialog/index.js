import {reactive} from '@vue/composition-api'

export default function (context, inject) {
  const globalDialog = reactive(new GlobalDialog(
    false, '', '', () => {
    })
  )

  inject('globalDialog', globalDialog)
}


class GlobalDialog {
  constructor(state, title, text, callback) {
    this.state = state
    this.title = title
    this.text = text
    this.callback = callback
  }

  getState() {
    return this.state
  }

  showDialog(title, text, callback) {
    this.title = title
    this.text = text
    this.callback = callback
    this.state = true
  }

  closeModal() {
    this.state = false
    this.title = ''
    this.text = ''
    this.callback = () => {
    }
  }
}
