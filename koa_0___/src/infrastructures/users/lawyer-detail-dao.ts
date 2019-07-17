import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import LawyerDetailDto from '@/infrastructures/users/lawyer-detail'


@Service()
export default LawyerDetailDao {

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.lawyerDetails = inmemoryDatabase.lawyerDetails
  }

  findAll(): LawyerDetailDto[] {
    return this.lawyerDetails.slice()
  }

  findById(id: number): LawyerDetailDto? {
    return this.lawyerDetails.find(c => c.id === id)
  }

}
