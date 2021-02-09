import { Controller, Get } from '@nestjs/common';
import { ActiveCasesService } from '../services/active-cases.service';

@Controller('active-cases')
export class ActiveCasesController {
  constructor(private readonly activeCasesService: ActiveCasesService) {}

  @Get()
  findAll() {
    return this.activeCasesService.findAll();
  }
}
