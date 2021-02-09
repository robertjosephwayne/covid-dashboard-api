import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ActiveCasesController } from './active-cases/controllers/active-cases.controller';
import { ActiveCasesService } from './active-cases/services/active-cases.service';
import { ActiveCasesModule } from './active-cases/active-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      port: process.env.MONGO_PORT,
    }),
    HttpModule,
    ActiveCasesModule,
  ],
  controllers: [AppController, ActiveCasesController],
  providers: [AppService, ActiveCasesService],
})
export class AppModule {}
