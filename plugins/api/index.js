import Schedule from '@/plugins/api/modules/schedule'

export default function ({$fire}, inject) {
  const api = []
  api['schedule'] = new Schedule($fire)
  inject('api', api)
}
