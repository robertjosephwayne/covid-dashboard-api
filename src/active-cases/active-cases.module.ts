import { HttpModule, Module } from '@nestjs/common';
import { ActiveCasesController } from './controllers/active-cases.controller';
import { ActiveCasesService } from './services/active-cases.service';

@Module({
  imports: [HttpModule],
  controllers: [ActiveCasesController],
  providers: [ActiveCasesService],
})
export class ActiveCasesModule {}
