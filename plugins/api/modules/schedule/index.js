export default class Schedule {
  constructor($fire) {
    this.fire = $fire
    this.firestore = $fire.firestore
  }

  resScheduleFormat(doc) {
    return {
      id: doc.id,
      title: doc.data().title,
      text: doc.data().text,
      datetime: doc.data().datetime.toDate(),
      user_id: doc.data().user_id
    }
  }

  async getScheduleById(id) {
    try {
      const doc = await this.firestore.doc('schedules/' + id).get()
      return this.resScheduleFormat(doc)
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async getSchedulesByNew() {
    const schedules = []
    try {
      const res = await this.firestore.collection('schedules').where('user_id', '==', this.fire.auth.currentUser.uid).orderBy('datetime').get()
      res.forEach(function (doc) {
        schedules.push(this.resScheduleFormat(doc))
      }.bind(this))
      return schedules
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async postSchedule(title, text, datetime) {
    try {
      const doc = await this.firestore.collection('schedules').doc()
      await doc.set({
        title,
        text,
        datetime,
        user_id: this.fire.auth.currentUser.uid,
      })
      return doc.id
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async editSchedule(id, title, text, datetime) {
    try {
      const doc = await this.firestore.collection('schedules').doc(id)
      await doc.update({
        title,
        text,
        datetime,
        user_id: this.fire.auth.currentUser.uid,
      })
      return doc.id
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async deleteSchedule(id) {
    try {
      const doc = await this.firestore.collection('schedules').doc(id)
      await doc.delete()
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
