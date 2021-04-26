export default function (context, inject) {
  const globalLoading = new GlobalLoading(false)
  inject('globalLoading', globalLoading)
}

class GlobalLoading {
  constructor(defaultState) {
    this.state = defaultState
  }
}
