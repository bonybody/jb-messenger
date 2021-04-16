import ScheduleRepository from "@/plugins/api/modules/schedule/repository";
import ScheduleRepositoryInterface from "@/plugins/api/modules/schedule/repository-interface";

export default function ($fire) {
  const repository = new ScheduleRepository($fire)
  return new ScheduleRepositoryInterface(repository)
}
