export default class ScheduleRepository {
  constructor($fire) {
    this.fire = $fire
    this.firestore = $fire.firestore
  }

  getSchedulesByNew() {
    return this.firestore.collection('schedules').where('user_id', '==', this.fire.auth.currentUser.uid).get()
      .then((querySnapshot) => {
        const schedules = []
        querySnapshot.forEach(function (doc) {
          schedules.push({
            id: doc.id,
            title: doc.data().title,
            text: doc.data().text,
            datetime: doc.data().datetime
          })
        })
        return schedules
      })
  }
}
