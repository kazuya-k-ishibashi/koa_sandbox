import { JsonController, Get, Param } from 'routing-controllers'
import { Service } from 'typedi'
import Consultation from '@/models/consultations/consultation'


@JsonController('/consultations')
export default class CosultationController {

  constructor() {
  }

  @Get('/')
  findAll(): Consultation[] {
    return []
  }


  @Get('/:id')
  findById(@Param('id') id: number): Consultation {
    return new Consultation()
  }

}
