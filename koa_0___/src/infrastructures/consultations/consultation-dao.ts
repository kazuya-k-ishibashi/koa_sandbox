import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import ConsultationDto from '@/infrastructures/consultation/consultation-dto'


@Service()
export default ConsultationDao {

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.consultations = inmemoryDatabase.consultations
  }

  findAll(): ConsultationDto[] {
    return this.consultations.slice()
  }

  findById(id: number): ConsultationDto? {
    return this.consultations.find(c => c.id === id)
  }

}
