import sanitizeHTML from 'sanitize-html'

export default function (context, inject) {
  inject('sanitize', sanitizeHTML)
}
