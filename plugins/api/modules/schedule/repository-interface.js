export default class ScheduleRepositoryInterface {
  constructor(ScheduleRepository) {
    this.repository = ScheduleRepository
  }

  getSchedulesByNew() {
    return this.repository.getSchedulesByNew()
  }

}
