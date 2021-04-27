import dayjs from "dayjs";
import ja from "dayjs/locale/ja"

dayjs.locale(ja)

export default function (context, inject) {
  const dateHandler = new DateHandler(dayjs)
  inject('dateHandler', dateHandler)
}

class DateHandler {
  constructor(dayjs) {
    this.dayjs = dayjs
  }

  formatJapanese(date) {
    return this.dayjs(date).format('YYYY年MM月D日H時m分')
  }

  toDate(str) {
    return this.dayjs(str).toDate()
  }

  toDateTimeLocal(date) {
    return this.dayjs(date).format(`YYYY-MM-DDTHH:mm:00`)
  }
}
