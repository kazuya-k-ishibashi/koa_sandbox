import { Service } from 'typedi'
import InMemoryDatabase from '@/infrastructures/inmemory-database'
import CategoryDto from '@/infrastructures/consultation/category'


@Service()
export default CategoryDao {

  constructor(
      private inmemoryDatabase: InMemoryDatabase) {
    this.categories = inmemoryDatabase.categories
  }

  findAll(): CategoryDto[] {
    return this.categories.slice()
  }

  findById(id: number): CategoryDto? {
    return this.categories.find(c => c.id === id)
  }

}
