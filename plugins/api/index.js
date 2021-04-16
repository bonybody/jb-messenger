import schedule from '@/plugins/api/modules/schedule'

export default function ({$fire}, inject) {
  const api = []
  api['schedule'] = schedule($fire)
  inject('api', api)
}
